import { useMemo, type CSSProperties, type ElementType } from "react";

type TextShimmerProps = {
  children: string;
  as?: ElementType;
  className?: string;
  duration?: number;
  spread?: number;
};

function cx(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(" ");
}

export default function TextShimmer({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const dynamicSpread = useMemo(() => children.length * spread, [children, spread]);

  const style = {
    "--spread": `${dynamicSpread}px`,
    "--duration": `${duration}s`,
  } as CSSProperties;

  return (
    <Component className={cx("text-shimmer", className)} style={style}>
      {children}
    </Component>
  );
}
