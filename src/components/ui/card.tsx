import type { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type CardOwnProps<C extends ElementType> = {
  as?: C;
};

type CardProps<C extends ElementType> = CardOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof CardOwnProps<C>>;

export function Card<C extends ElementType = "div">({ as, className, ...props }: CardProps<C>) {
  const Component = as ?? "div";

  return <Component className={cn("card", "ui-card", className)} {...props} />;
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("ui-card-header", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("ui-card-title", className)} {...props} />;
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("ui-card-description", className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("ui-card-content", className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("ui-card-footer", className)} {...props} />;
}
