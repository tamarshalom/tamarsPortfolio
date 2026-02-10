"use client";

import { useEffect, useState } from "react";

const SPOTLIGHT_SIZE = 280; // px radius of the lit area
const SPOTLIGHT_OPACITY = 0.3; // slight dim outside the spotlight—keep site very visible

export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
    };
  }, [isVisible]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(
          circle ${SPOTLIGHT_SIZE}px at ${position.x}px ${position.y}px,
          transparent 0%,
          transparent 40%,
          rgba(0, 0, 0, ${SPOTLIGHT_OPACITY}) 100%
        )`,
      }}
    />
  );
}
