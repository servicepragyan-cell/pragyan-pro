"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleButton from "./CircleButton";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction2() {
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
      <section className="relative bg-black text-white mt-20 lg:mt-30 overflow-hidden " >
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:mt-0 md:pt-16 grid md:grid-cols-2 gap-10 md:gap-8 lg:gap-10 items-center">
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
          <CircleButton circleButtonText="Let’s talk" href="/contactus"  />
        </div>
      </div>
    </section>
  );
}
