"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function AppLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const arcsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      arcsRef.current.forEach((arc, i) => {
        if (!arc) return;
        gsap.to(arc, {
          rotation: 360,
          duration: 3 + i * 0.5,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
          transformBox: "fill-box",
        });
      });
    }, containerRef);

    const timer = setTimeout(() => setLoading(false), 1500);

    return () => {
      clearTimeout(timer);
      ctx.revert(); // 🔥 THIS fixes the crash
    };
  }, []);


  return (
    <>
      {loading && (
        <div
          ref={containerRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="absolute w-[260px] h-[260px]">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                ref={(el) => (arcsRef.current[i] = el)}
                viewBox="0 0 100 100"
                className="absolute inset-0"
              >
                <circle
                  cx="50"
                  cy="50"
                  r={38 + i * 6}
                  fill="none"
                  stroke="#f8d249"
                  strokeWidth="0.6"
                  strokeDasharray={`${20 + i * 8} ${40 - i * 6}`}
                  strokeLinecap="round"
                  opacity="0.9"
                />
              </svg>
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <Image
              src="/logo/load.webp"
              alt="logo"
              width={80}
              height={80}
              className="drop-shadow-[0_0_18px_#f8d249]"
            />
            <span className="mt-4 text-[10px] tracking-[0.35em] text-[#f8d249] ">LOADING..
            </span>
          </div>
        </div>
      )}

      <div
        className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
          }`}
      >
        {children}
      </div>
    </>
  );
}
