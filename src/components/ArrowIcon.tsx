type ArrowDirection = "right" | "up" | "up-right";

type ArrowIconProps = {
  className?: string;
  direction?: ArrowDirection;
};

const transforms: Record<ArrowDirection, string | undefined> = {
  right: undefined,
  up: "translate(6.4 6.4) rotate(-90 9.5 9.5)",
  "up-right": "translate(6.4 6.4) rotate(-45 9.5 9.5)",
};

export default function ArrowIcon({ className = "arrow-icon", direction = "right" }: ArrowIconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M 14.6 10.8 L 0 10.8 L 0 8.4 L 14.6 8.4 L 7.9 1.7 L 9.6 0 L 19.2 9.6 L 9.6 19.2 L 7.9 17.5 Z"
        transform={transforms[direction]}
        fill="currentColor"
      />
    </svg>
  );
}
