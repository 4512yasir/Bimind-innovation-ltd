import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 transition-transform duration-150"
        style={{
          transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
          background:
            "radial-gradient(circle, rgba(26,127,199,0.35) 0%, rgba(0,175,196,0.15) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}