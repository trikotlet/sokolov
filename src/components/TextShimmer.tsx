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
  const words = useMemo(() => children.split(/(\s+)/), [children]);

  const style = {
    "--wave-distance": `${Math.max(spread, 1) * -0.16}em`,
    "--duration": `${duration}s`,
  } as CSSProperties;

  let charIndex = 0;

  return (
    <Component className={cx("text-shimmer", className)} style={style} aria-label={children}>
      {words.map((word, wordIndex) => {
        if (/^\s+$/.test(word)) {
          return (
            <span className="text-wave-space" aria-hidden="true" key={`space-${wordIndex}`}>
              {word}
            </span>
          );
        }

        return (
          <span className="text-wave-word" aria-hidden="true" key={`${word}-${wordIndex}`}>
            {[...word].map((char) => {
              const index = charIndex;
              charIndex += 1;

              return (
                <span
                  className="text-wave-char"
                  style={{ "--char-index": index } as CSSProperties}
                  key={`${char}-${index}`}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </Component>
  );
}
