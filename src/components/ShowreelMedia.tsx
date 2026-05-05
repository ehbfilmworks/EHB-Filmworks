import { useEffect, useState } from "react";

interface Props {
  posterSrc: string;
  videoSrc: string;
}

const isMobileViewport = () =>
  typeof window !== "undefined" && window.innerWidth < 800;
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ShowreelMedia({ posterSrc, videoSrc }: Props) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const decide = () => {
      setShowVideo(!isMobileViewport() && !prefersReducedMotion());
    };
    decide();
    window.addEventListener("resize", decide);
    return () => window.removeEventListener("resize", decide);
  }, []);

  return (
    <div className="hero-media">
      {showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          src={videoSrc}
        />
      ) : (
        <img className="still" src={posterSrc} alt="" />
      )}
    </div>
  );
}
