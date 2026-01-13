"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GScene from "./three/GScene";
import CircleButton from "./CircleButton";

gsap.registerPlugin(ScrollTrigger);

export default function Entry() {
  const pageRef = useRef(null);
  const wisdomRef = useRef(null);
  const actionRef = useRef(null);
  const growthRef = useRef(null);
  const circleRef = useRef(null);
  const modelRef = useRef(null);
  const sceneWrapperRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(sceneWrapperRef.current, { autoAlpha: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "+=260%",
          scrub: 1.2,
          pin: true,
        },
      });

      // TEXT EXIT
      tl.to(wisdomRef.current, { xPercent: -160, opacity: 0 }, 0)
        .to(actionRef.current, { xPercent: 160, opacity: 0 }, 0)
        .to(growthRef.current, { yPercent: -160, opacity: 0 }, 0)
        .to(circleRef.current, { y: -140, opacity: 0 }, 0);

      // MODEL ANIMATION
      if (modelRef.current) {
        tl.fromTo(
          modelRef.current.rotation,
          { y: -0.3 },
          { y: Math.PI * 2.4, ease: "none" },
          0
        )
          .fromTo(
            modelRef.current.scale,
            { x: 1.1, y: 1.1, z: 1.1 },
            { x: 2.6, y: 2.6, z: 2.6, ease: "none" },
            0
          )
          .fromTo(
            modelRef.current.position,
            { z: 0, x: 0 },
            { z: -4, x: 1.5, ease: "none" },
            0
          )
          .to(
            sceneWrapperRef.current,
            {
              autoAlpha: 0,
              ease: "power2.out",
              duration: 0.4,
            },
            "85%"
          );
      }
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.fromTo(
        [wisdomRef.current, actionRef.current, growthRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    });
  }, { scope: pageRef });

  return (
    <section
      ref={pageRef}
      className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-10 pt-14 pb-3"
    >
      <div
        ref={sceneWrapperRef}
        className="block absolute inset-0 z-0 pointer-events-none"
      >
        <GScene ref={modelRef} />
      </div>

      {/* TEXT */}
      <div className="relative z-10 flex flex-col gap-6">
        <h1 ref={wisdomRef} className="text-white font-extrabold text-[12vw] leading-[0.85]">
          WISDOM
        </h1>
        <h1 ref={actionRef} className="text-[#f8d249] font-extrabold text-[12vw] leading-[0.85]">
          ACTION
        </h1>
        <h1 ref={growthRef} className="text-white font-extrabold text-[12vw] leading-[0.85]">
          GROWTH
        </h1>
      </div>

      <CircleButton
        ref={circleRef}
        circleButtonText="Start a Project"
        className="lg:-top-25 md:-top-2 -top-7 sm:-top-10 -right-7 md:-right-10 "
        href="/portfolio"
      />
    </section>
  );
}