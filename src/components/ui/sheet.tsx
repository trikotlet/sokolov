import type { ReactNode } from "react";
import Dialog from "./dialog";

type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  closeLabel?: string;
};

export default function Sheet({ open, onOpenChange, title, description, children, closeLabel }: SheetProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      closeLabel={closeLabel}
    >
      <div className="ui-sheet__content">{children}</div>
    </Dialog>
  );
}
