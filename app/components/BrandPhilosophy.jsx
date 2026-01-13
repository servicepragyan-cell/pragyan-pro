"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BrandPhilosophy() {
  const philosophyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each paragraph staggered
      gsap.fromTo(
        philosophyRef.current.children,
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 85%",
          },
        }
      );
    }, philosophyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Brand Philosophy
        </h2> */}
        <div
          ref={philosophyRef}
          className="text-white text-lg md:text-xl space-y-8 leading-relaxed"
        >
          <p>
            Pragyan is the{" "}
            <span className="font-bold text-[#f8d249]">brain</span> your brand has been looking for.
          </p>
          <p>
            We combine <span className="font-bold text-[#f8d249]">sharp thinking</span>, <span className="font-bold text-[#f8d249]">creative ideas</span>, and practical execution to help brands stand out.
          </p>
          <p>
            Every campaign, every concept, every connection is designed to make an <span className="font-bold text-[#f8d249]">impact</span>.
          </p>
          <p>
            With us, your brand becomes <span className="font-bold text-[#f8d249]">smarter</span>, <span className="font-bold text-[#f8d249]">stronger</span>, and <span className="font-bold text-[#f8d249]">unforgettable</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BrandPhilosophy;
