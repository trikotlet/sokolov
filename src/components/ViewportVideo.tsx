import { useEffect, useRef, useState } from "react";
import { toAssetUrl } from "../utils/basePath";

type ViewportVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel: string;
  rootMargin?: string;
  playOnHover?: boolean;
  isHovered?: boolean;
};

export default function ViewportVideo({
  src,
  poster,
  className,
  ariaLabel,
  rootMargin = "280px 0px",
  playOnHover = false,
  isHovered = false,
}: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wasHoveredRef = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [supportsHoverPlayback, setSupportsHoverPlayback] = useState(false);

  useEffect(() => {
    if (!playOnHover || typeof window === "undefined" || typeof window.matchMedia !== "function") {
      setSupportsHoverPlayback(false);
      return;
    }

    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setSupportsHoverPlayback(query.matches);
    update();

    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", update);
      return () => query.removeEventListener("change", update);
    }

    query.addListener(update);
    return () => query.removeListener(update);
  }, [playOnHover]);

  const allowPlayback = !playOnHover || supportsHoverPlayback;

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

    if (!allowPlayback) {
      wasHoveredRef.current = false;
      node.pause();
      return;
    }

    if (isInView) {
      if (playOnHover && isHovered && !wasHoveredRef.current) {
        node.currentTime = 0;
      }

      wasHoveredRef.current = isHovered;

      if (playOnHover && !isHovered) {
        node.pause();
        return;
      }

      const playPromise = node.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => undefined);
      }
      return;
    }

    wasHoveredRef.current = false;
    node.pause();
  }, [isInView, shouldLoad, playOnHover, isHovered, allowPlayback]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad && allowPlayback ? toAssetUrl(src) : undefined}
      poster={poster ? toAssetUrl(poster) : undefined}
      className={className}
      autoPlay={!playOnHover && allowPlayback && shouldLoad && isInView}
      loop
      muted
      playsInline
      preload="none"
      aria-label={ariaLabel}
    />
  );
}
