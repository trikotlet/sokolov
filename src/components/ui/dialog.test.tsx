import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";
import Dialog from "./dialog";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let root: Root | null = null;
let mountNode: HTMLDivElement | null = null;

function setup() {
  document.body.innerHTML = "";
  mountNode = document.createElement("div");
  document.body.appendChild(mountNode);
  root = createRoot(mountNode);
}

async function render(element: React.ReactNode) {
  await act(async () => {
    root?.render(element);
    await Promise.resolve();
  });
}

function renderDialog(open: boolean, onOpenChange: (open: boolean) => void = () => undefined) {
  return render(
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="Test dialog"
      description="Test description"
      closeLabel="Close test dialog"
    >
      <button type="button">Inside action</button>
    </Dialog>,
  );
}

function pressKey(key: string, shiftKey = false) {
  act(() => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key, shiftKey, bubbles: true, cancelable: true }));
  });
}

function getDialog(): HTMLElement | null {
  return document.querySelector('[role="dialog"]');
}

function getCloseButton(): HTMLButtonElement | null {
  return document.querySelector('[aria-label="Close test dialog"]');
}

function getInsideAction(): HTMLButtonElement | null {
  const dialog = getDialog();
  return dialog?.querySelector("button:not([aria-label])") ?? null;
}

afterEach(() => {
  if (root) {
    act(() => {
      root?.unmount();
    });
  }
  root = null;
  mountNode = null;
  document.body.innerHTML = "";
});

describe("Dialog", () => {
  it("moves focus into the dialog when opened", async () => {
    setup();
    await renderDialog(true);

    expect(document.activeElement).toBe(getDialog());
  });

  it("wraps Tab from the last focusable element back to the first", async () => {
    setup();
    await renderDialog(true);

    const closeButton = getCloseButton();
    const insideAction = getInsideAction();
    act(() => {
      insideAction?.focus();
    });

    pressKey("Tab");

    expect(document.activeElement).toBe(closeButton);
  });

  it("wraps Shift+Tab from the first focusable element to the last", async () => {
    setup();
    await renderDialog(true);

    const closeButton = getCloseButton();
    const insideAction = getInsideAction();
    act(() => {
      closeButton?.focus();
    });

    pressKey("Tab", true);

    expect(document.activeElement).toBe(insideAction);
  });

  it("closes on Escape", async () => {
    setup();
    const onOpenChange = vi.fn();
    await renderDialog(true, onOpenChange);

    pressKey("Escape");

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("restores focus to the trigger element after closing", async () => {
    setup();
    const trigger = document.createElement("button");
    trigger.type = "button";
    document.body.appendChild(trigger);
    act(() => {
      trigger.focus();
    });

    await renderDialog(true);
    expect(document.activeElement).toBe(getDialog());

    await renderDialog(false);
    expect(document.activeElement).toBe(trigger);
  });

  it("gives every mounted dialog unique labelled-by ids", async () => {
    setup();
    await render(
      <>
        <Dialog open onOpenChange={() => undefined} title="First dialog">
          <span>first</span>
        </Dialog>
        <Dialog open onOpenChange={() => undefined} title="Second dialog">
          <span>second</span>
        </Dialog>
      </>,
    );

    const dialogs = Array.from(document.querySelectorAll('[role="dialog"]'));
    expect(dialogs).toHaveLength(2);

    const [firstId, secondId] = dialogs.map((dialog) => dialog.getAttribute("aria-labelledby"));
    expect(firstId).toBeTruthy();
    expect(secondId).toBeTruthy();
    expect(firstId).not.toBe(secondId);

    expect(document.getElementById(firstId!)?.textContent).toBe("First dialog");
    expect(document.getElementById(secondId!)?.textContent).toBe("Second dialog");
  });
});
