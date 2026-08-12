import { useEffect, useId, useRef, type MouseEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Button from "./button";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  closeLabel?: string;
};

export default function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  closeLabel = "Close dialog",
}: DialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    restoreFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusableElements = () => {
      const dialog = dialogRef.current;
      if (!dialog) {
        return [];
      }

      return Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])',
        ),
      );
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = getFocusableElements();
      if (focusable.length === 0) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      const insideDialog = dialogRef.current?.contains(active) ?? false;

      if (event.shiftKey) {
        if (!insideDialog || active === first || active === dialogRef.current) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (!insideDialog || active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      restoreFocusRef.current?.focus();
      restoreFocusRef.current = null;
    };
  }, [open, onOpenChange]);

  if (!open) {
    return null;
  }

  const onOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onOpenChange(false);
    }
  };

  return createPortal(
    <div className="ui-overlay" onClick={onOverlayClick}>
      <div
        ref={dialogRef}
        className="ui-dialog"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
      >
        <div className="ui-dialog__header">
          <div className="ui-dialog__copy">
            <h2 id={titleId} className="ui-dialog__title">
              {title}
            </h2>
            {description ? (
              <p id={descriptionId} className="ui-dialog__description">
                {description}
              </p>
            ) : null}
          </div>
          <Button
            as="button"
            type="button"
            variant="ghost"
            size="icon"
            className="ui-dialog__close"
            aria-label={closeLabel}
            onClick={() => onOpenChange(false)}
          >
            <svg className="header-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6 6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </div>
        <div className="ui-dialog__body">{children}</div>
        {footer ? <div className="ui-dialog__footer">{footer}</div> : null}
      </div>
    </div>,
    document.body,
  );
}
