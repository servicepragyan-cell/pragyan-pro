"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Entry2() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { scale: 1.3, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: true,
          },
        }
      );

      // 3D Image animation
      gsap.fromTo(
        imageRef.current,
        {
          scale: 0.8,
          rotateY: -25,
          rotateX: 15,
          z: -200,
        },
        {
          scale: 1.1,
          rotateY: 0,
          rotateX: 0,
          z: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: true,
            pin: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Title */}
      <h1
        ref={titleRef}
        className="absolute left-10 bottom-20 text-[8vw] font-extrabold leading-none tracking-tight z-10"
      >
        Digital
        <br />
        Cover
      </h1>

      {/* 3D Image */}
      <div
        ref={imageRef}
        className="w-[60vw] max-w-4xl aspect-[16/10] rounded-xl overflow-hidden shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="/cover.jpg" // replace with your image
          alt="Digital Cover"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
