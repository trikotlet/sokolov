import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

export default function Separator({
  className,
  decorative = true,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <div
      aria-hidden={decorative}
      role={decorative ? undefined : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      className={cn("ui-separator", `ui-separator--${orientation}`, className)}
      {...props}
    />
  );
}
