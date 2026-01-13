"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleButton from "./CircleButton";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const introRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 80%",
          },
        }
      );
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black md:h-[40vh] h-auto flex items-center px-6 md:px-12">
      <div
        className="
          max-w-7xl mx-auto w-full
          flex flex-col lg:flex-row
          items-center lg:items-center
          justify-between
          gap-10 lg:gap-16
        "
      >
        {/* LEFT TEXT */}
        <div
          ref={introRef}
          className="
            max-w-3xl
            text-gray-300
            text-lg sm:text-xl md:text-3xl lg:text-4xl
            leading-relaxed
            font-medium
            space-y-3
            text-center lg:text-left
          "
        >
          <span>At Pragyan , we combine expertise and integrity to make <span className=" font-bold" >your business visible, credible, and unstoppable</span>.</span>

      
        </div>

        {/* RIGHT CIRCLE */}
        <div className="shrink-0 flex justify-center lg:justify-end">
          <CircleButton circleButtonText="Let’s talk" />
        </div>
      </div>
    </section>
  );
}
