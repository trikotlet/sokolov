import { useEffect, useRef, useState } from "react";
import lottie, { type AnimationItem, type SVGRendererConfig } from "lottie-web";
import { toAssetUrl } from "../utils/basePath";

type LottieAnimationSource =
  | {
      path: string;
      animationData?: never;
    }
  | {
      path?: never;
      animationData: unknown;
    };

type LottieAnimationProps = LottieAnimationSource & {
  className?: string;
  ariaLabel?: string;
  loop?: boolean | number;
  autoplay?: boolean;
  rendererSettings?: SVGRendererConfig;
};

export default function LottieAnimation({
  path,
  animationData,
  className,
  ariaLabel,
  loop = true,
  autoplay = true,
  rendererSettings,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);
    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    animationRef.current?.destroy();
    container.replaceChildren();

    const animation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop,
      autoplay: autoplay && !prefersReducedMotion,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        ...rendererSettings,
      },
      ...(path ? { path: toAssetUrl(path) } : { animationData }),
    });

    animationRef.current = animation;

    if (prefersReducedMotion) {
      animation.goToAndStop(0, true);
    }

    return () => {
      animation.destroy();

      if (animationRef.current === animation) {
        animationRef.current = null;
      }
    };
  }, [animationData, autoplay, loop, path, prefersReducedMotion, rendererSettings]);

  return (
    <div
      ref={containerRef}
      className={className}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    />
  );
}
