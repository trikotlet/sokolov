import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "default" | "ghost" | "outline" | "cta";
type ButtonSize = "default" | "sm" | "lg" | "icon";

type ButtonOwnProps<C extends ElementType> = {
  as?: C;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps<C extends ElementType> = ButtonOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps<C>>;

export default function Button<C extends ElementType = "button">({
  as,
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps<C>) {
  const Component = as ?? "button";

  return (
    <Component
      className={cn("ui-button", `ui-button--${variant}`, `ui-button--${size}`, className)}
      {...props}
    />
  );
}
