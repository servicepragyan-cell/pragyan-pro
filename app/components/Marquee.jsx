"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 18,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-[#f8d249] py-6 my-4 lg:my-12">
      <div ref={marqueeRef} className="relative whitespace-nowrap">
        <div className="marquee-track flex w-max">
          {/* DUPLICATE CONTENT FOR SEAMLESS LOOP */}
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              <MarqueeItem text="MARKETING" />
              <Star />
              <MarqueeItem text="DEVELOPMENT" />
              <Star />
              <MarqueeItem text="WEB DESIGN" />
              <Star />
              <MarqueeItem text="PROJECT & PRODUCT CONSULTING" />
              <Star />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeItem({ text }) {
  return (
    <span className="text-black text-2xl md:text-3xl font-semibold tracking-wide">
      {text}
    </span>
  );
}

function Star() {
  return (
    <span className="text-black text-2xl md:text-3xl">✦</span>
  );
}
