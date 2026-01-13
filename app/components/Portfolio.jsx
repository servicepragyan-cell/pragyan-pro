
"use client";

import React, { useEffect, useRef, useState } from "react";

/* ---------------- PROJECT DATA ---------------- */
const projects = [
  { id: 1, title: "ATC Chains India", image: "/logo/atc.webp", side: "left" },
  { id: 2, title: "Bhavya Srishti Udyog", image: "/logo/bsu.webp", side: "right" },
  { id: 3, title: "Shreeji Enterprise", image: "/logo/shreeji.webp", side: "left" },
  { id: 4, title: "Yash Engineers", image: "/logo/yash.webp", side: "right" },
  { id: 5, title: "Mahesana Municipal Corporation", image: "/logo/MMC.webp", side: "left" },
  { id: 6, title: "Urban Junggle", image: "/logo/Urban_jungle.webp", side: "right" },
];

/* ---------------- PROJECT CARD ---------------- */
const ProjectCard = ({ project }) => {
  const isLeft = project.side === "left";

  return (
    <div
      className={`project-card absolute
       w-[88vw]
        sm:w-[70vw]
        md:w-[55vw]
        lg:w-[42vw]
        xl:w-[38vw]
        max-w-[720px]
        aspect-[3.7/4]

     left-1/2
// -translate-x-1/2
// ${isLeft
          ? "lg:-translate-x-[46vw]"
          : "lg:translate-x-[6vw]"} z-10`}
      data-side={project.side}
    >
      <div className="relative w-full h-[85%] rounded-[20px] overflow-hidden bg-[#111] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 px-2">
        <h2 className="text-xl md:text-3xl font-bold uppercase tracking-wider text-white">
          {project.title}
        </h2>
      </div>
    </div>
  );
};

/* ---------------- PORTFOLIO ---------------- */
export default function Portfolio() {
  const containerRef = useRef(null);
  const introRef = useRef(null);
  const [gsapReady, setGsapReady] = useState(false);

  /* -------- LOAD GSAP -------- */
  useEffect(() => {
    const load = (src) =>
      new Promise((res) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = res;
        document.head.appendChild(s);
      });

    const init = async () => {
      if (!window.gsap) {
        await load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js");
        await load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js");
      }
      setGsapReady(true);
    };

    init();
  }, []);

  /* -------- GSAP + SCROLL -------- */
  useEffect(() => {
    if (!gsapReady) return;

    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".project-card");
    const totalCards = cards.length;
    const isMobile = window.innerWidth < 1024;

    const diamondStroke = document.querySelector("#diamond-progress");
    const floatingDiamond = document.querySelector(".floating-diamond");

    const strokeLength = 340;

    gsap.set(diamondStroke, {
      strokeDasharray: strokeLength,
      strokeDashoffset: strokeLength,
    });

    gsap.set(floatingDiamond, {
      autoAlpha: 0,
      pointerEvents: "none",
    });

    const ctx = gsap.context(() => {
      /* INTRO ANIMATION */
      gsap.from(introRef.current.querySelectorAll("h2, p"), {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        },
      });

      /* PINNED PROJECT TIMELINE */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalCards * (isMobile ? 95 : 80)}%`,
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        const isLeft = card.dataset.side === "left";

        gsap.set(card, {
          yPercent: -160,
          rotationX: isMobile ? 0 : -35,
          rotationY: isMobile ? 0 : isLeft ? 18 : -18,
          scale: isMobile ? 0.7 : 0.6,
          autoAlpha: 0,          // 🔥 instead of opacity
          visibility: "hidden",  // 🔥 hard hide
          pointerEvents: "none", // 🔥 no interaction
          filter: "blur(12px)",
          transformPerspective: 1200,
          transformOrigin: "center center",
          zIndex: totalCards - i,
        });

        tl.to(
          card,
          {
            yPercent: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            autoAlpha: 1,
            visibility: "visible",
            pointerEvents: "auto",
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          },
          i * 1.3
        );


        if (i < totalCards - 1) {
          tl.to(
            card,
            {
              scale: 0.45,                 // 👈 shrink enough to disappear
              yPercent: 45,
              autoAlpha: 0,
              visibility: "hidden",
              pointerEvents: "none",
              filter: "blur(14px)",
              duration: 1,
              ease: "power3.inOut",
            },
            i * 1.3 + 1
          );
        }
      });

      /* SHOW / HIDE DIAMOND (SECTION ONLY) */
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalCards * (isMobile ? 95 : 80)}%`,

        onEnter: () =>
          gsap.to(floatingDiamond, {
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
            pointerEvents: "auto",
          }),

        onLeave: () =>
          gsap.to(floatingDiamond, {
            autoAlpha: 0,
            duration: 0.3,
            ease: "power2.in",
            pointerEvents: "none",
          }),

        onEnterBack: () =>
          gsap.to(floatingDiamond, {
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
            pointerEvents: "auto",
          }),

        onLeaveBack: () =>
          gsap.to(floatingDiamond, {
            autoAlpha: 0,
            duration: 0.3,
            ease: "power2.in",
            pointerEvents: "none",
          }),
      });

      /* DIAMOND PROGRESS FILL */
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalCards * (isMobile ? 95 : 80)}%`,
        scrub: true,
        onUpdate: (self) => {
          gsap.to(diamondStroke, {
            strokeDashoffset: strokeLength * (1 - self.progress),
            ease: "none",
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [gsapReady]);

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* FLOATING DIAMOND (VISIBLE ONLY IN PROJECTS) */}
      <div className="floating-diamond hidden lg:block fixed left-1/2 bottom-[8%] -translate-x-1/2 z-[9999]">

        <div className="relative w-[110px] h-[110px] rotate-45">
          <svg className="absolute inset-0" viewBox="0 0 100 100">
            <rect
              x="8"
              y="8"
              width="84"
              height="84"
              rx="16"
              ry="16"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            <rect
              id="diamond-progress"
              x="8"
              y="8"
              width="84"
              height="84"
              rx="16"
              ry="16"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
          </svg>

          <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center text-center">
            <div className="mb-2 text-white text-sm">⬚</div>
            <p className="text-[12px] leading-tight tracking-wide">
              Discover the<br />
              <span className="underline">project</span>
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      {/* <section
        ref={introRef}
        className="px-6 md:px-12 py-32 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Stories of clarity,<br /> credibility & growth
        </h2>
      </section> */}
      {/* INTRO */}
      <section
        ref={introRef}
        className="relative px-6 md:px-12 py-20 md:pt-40 max-w-7xl mx-auto bg-black"
      >
        {/* Eyebrow */}
        {/* <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.35em] text-white/50">
          Selected Work
        </p> */}

        {/* Main Heading */}
        <h2 className="
          max-w-5xl
          text-[clamp(2.6rem,6vw,5.2rem)]
          font-extrabold
          leading-[1.05]
          tracking-tight
        ">
          Stories of clarity,
          <br className="hidden sm:block" />
          credibility <span className="text-white/40">&</span> growth
        </h2>

        {/* Divider */}
        <div className="mt-10 mb-8 " />

        {/* Description */}
        <p className="
          max-w-3xl
          text-base md:text-lg
          leading-relaxed
          text-white/70
        ">
          At <span className="text-white font-medium">Pragyan</span>, every project
          begins with a simple question — what problem are we really solving?
          <br /><br />
          Across industries, we partner with brands to bring
          <span className="text-white"> structure</span> to communication,
          <span className="text-white"> intelligence</span> to execution,
          and <span className="text-white"> meaning</span> to growth.
          <br /><br />
          Here’s a closer look at the work we’ve done.
        </p>
      </section>


      {/* PROJECTS */}
      <div ref={containerRef} className="relative min-h-screen bg-black" style={{ perspective: "1200px" }} >
        <div className="relative h-full flex justify-center items-center">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}




