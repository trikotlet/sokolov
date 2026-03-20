import { useEffect, type MouseEvent, type ReactNode } from "react";
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
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
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
        className="ui-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby={description ? "dialog-description" : undefined}
      >
        <div className="ui-dialog__header">
          <div className="ui-dialog__copy">
            <h2 id="dialog-title" className="ui-dialog__title">
              {title}
            </h2>
            {description ? (
              <p id="dialog-description" className="ui-dialog__description">
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
    document.body
  );
}
