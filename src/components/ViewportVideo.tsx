import { useEffect, useRef, useState } from "react";
import { toAssetUrl } from "../utils/basePath";

type ViewportVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel: string;
  rootMargin?: string;
};

export default function ViewportVideo({
  src,
  poster,
  className,
  ariaLabel,
  rootMargin = "280px 0px",
}: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) {
      return;
    }

    if (typeof window === "undefined" || typeof window.IntersectionObserver === "undefined") {
      setShouldLoad(true);
      setIsInView(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting || entry.intersectionRatio > 0;
        setIsInView(visible);

        if (visible) {
          setShouldLoad(true);
        }
      },
      { rootMargin, threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !shouldLoad) {
      return;
    }

    if (isInView) {
      const playPromise = node.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => undefined);
      }
      return;
    }

    node.pause();
  }, [isInView, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? toAssetUrl(src) : undefined}
      poster={poster ? toAssetUrl(poster) : undefined}
      className={className}
      autoPlay={shouldLoad && isInView}
      loop
      muted
      playsInline
      preload="none"
      aria-label={ariaLabel}
    />
  );
}
