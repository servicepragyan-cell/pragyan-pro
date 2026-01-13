"use client";

import { forwardRef, useRef } from "react";
import Link from "next/link";

const CircleButton = forwardRef(function CircleButton(
  {
    href, // ✅ REQUIRED
    circleButtonText = "Start a Project",
    className = "",
  },
  ref
) {
  const btnRef = useRef(null);

  const setRefs = (el) => {
    btnRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) ref.current = el;
  };

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = "translate(0,0)";
    }
  };

  return (
    <Link
      href={href}
      ref={setRefs}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={`
        group relative flex items-center justify-center
        rounded-full border border-gray-600
        bg-black text-white
        transition-all duration-300 ease-out
        fixed
        w-16 h-16 text-[10px]
        shadow-lg

        sm:w-48 sm:h-48
        sm:text-base
        sm:shadow-none

        ${className}
      `}
    >
      {/* Desktop hover fill */}
      <span
        className="
          pointer-events-none
          absolute inset-0 rounded-full bg-white
          scale-0 sm:group-hover:scale-100
          transition-transform duration-500
        "
      />

      <div className="relative z-10 flex flex-col items-center gap-1">
        {/* Arrow */}
        <svg
          viewBox="0 0 40 40"
          className="
            w-5 h-5
            sm:w-9 sm:h-9
            stroke-white sm:group-hover:stroke-black
            transition-all duration-300
          "
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="8" y1="32" x2="32" y2="8" />
          <polyline points="20,8 32,8 32,20" />
        </svg>

        {/* Text – Desktop only */}
        <span
          className="
            hidden sm:block
            text-base font-semibold underline
            sm:group-hover:text-black
          "
        >
          {circleButtonText}
        </span>
      </div>
    </Link>
  );
});

export default CircleButton;
