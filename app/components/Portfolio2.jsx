"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Project One", image: "/projects/p1.jpg" },
  { id: 2, title: "Project Two", image: "/projects/p2.jpg" },
  { id: 3, title: "Project Three", image: "/projects/p3.jpg" },
  { id: 4, title: "Project Four", image: "/projects/p4.jpg" },
];

export default function Portfolio2() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(trackRef.current, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.utils.toArray(".card").forEach((card) => {
        gsap.fromTo(
          card,
          { rotateY: -15, rotateX: 10, opacity: 0 },
          {
            rotateY: 0,
            rotateX: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Horizontal Track */}
      <div
        ref={trackRef}
        className="flex h-full items-center gap-[120px] px-[15vw] will-change-transform"
      >
        {projects.map((p) => (
          <div
            key={p.id}
            className="card relative h-[520px] w-[420px] shrink-0 overflow-hidden rounded-[20px] bg-neutral-900 shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover brightness-90"
            />

            <h3 className="absolute bottom-8 left-8 text-lg tracking-wide text-white">
              {p.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Bottom Center Diamond Indicator */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-12 w-12 rotate-45 border border-neutral-500 animate-pulse" />
      </div>
    </section>
  );
}
