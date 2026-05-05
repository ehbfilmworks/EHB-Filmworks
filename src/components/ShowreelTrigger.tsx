import { useEffect, useRef, useState } from "react";

interface Props {
  videoSrc: string;
}

export default function ShowreelTrigger({ videoSrc }: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setOpen(false);
    setTimeout(() => triggerRef.current?.focus(), 0);
  };

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <>
      <a
        ref={triggerRef}
        className="btn btn-ghost"
        href="#showreel"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <i className="fa-solid fa-play" aria-hidden="true"></i> Mit Ton ansehen
      </a>

      {open && (
        <div
          className="showreel-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Showreel mit Ton"
          onClick={onBackdropClick}
        >
          <div className="showreel-modal">
            <button
              ref={closeBtnRef}
              type="button"
              className="close"
              aria-label="Schliessen"
              onClick={close}
            >
              ×
            </button>
            <video
              ref={videoRef}
              autoPlay
              controls
              playsInline
              src={videoSrc}
            />
          </div>
        </div>
      )}
    </>
  );
}
