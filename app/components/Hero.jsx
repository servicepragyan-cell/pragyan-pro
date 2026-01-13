"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import RotatingBadge from "@/app/components/RotatingBadge";

export default function Hero() {
  const textRef = useRef(null);
  // const highlightRef = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      textRef.current.children,
      { y: 60, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        delay : 0.7,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
      }
    );
  }, textRef);

  return () => ctx.revert(); // 🔥 CLEANUP
}, []);


  return (
    <section className="relative flex px-6 md:px-12 items-center my-12 md:my-16 lg:mt-20 ">
      {/* Video Background */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover brightness-75 mix-blend-overlay"
        src="/banner-video.mov"
        autoPlay
        muted
        loop
        playsInline
      /> */}

      {/* Content Container */}
      <div className=" relative z-20 max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center text-white select-none  ">
        <div ref={textRef} className="font-[Plus Jakarta Sans] mt-100 md:mt-130 lg:mt-0 space-y-6 text-center lg:text-left ">
          <h1 className="flex text-4xl md:text-5xl lg:text-7xl font-bold ">

            Connecting
            <span className="text-[#f8d249] font-bold"> People</span>,

          </h1>
          <h1 className="flex text-4xl md:text-5xl lg:text-7xl font-bold">
            Building
            <span className="text-[#f8d249] font-bold">Brands</span>,
          </h1>
          <h1 className="flex text-4xl md:text-5xl lg:text-7xl font-bold">
            Driving
            <span className="text-[#f8d249] font-bold">Results.</span>
          </h1>

          <p className="text-start  mt-8 max-w-xl mx-auto lg:mx-0 text-lg md:text-2xl font-medium text-gray-300 leading-relaxed">
            At <span className="font-semibold text-[#f8d249] ml-1">Pragyan Branding and Marketing</span>, we
            combine expertise and integrity to make your business visible, credible, and unstoppable.
          </p>

          {/* CTA */}
          {/* <div className="my-4 mt-8 md:mt-12 flex justify-start">
            <a href="#contact" className="px-10 py-4 bg-[#f8d249] text-black text-xl rounded-md font-semibold shadow-xl shadow-yellow-400/40 hover:scale-105 transition-transform duration-300 flex items-center gap-4">
              Start a project
           
            </a>
          </div> */}
        </div>

        {/* Right Side - Jumping Image */}
        <div className=" lg:opacity-[1] md:flex justify-center items-center -mt-330 md:-mt-400 lg:mt-0 -z-1 ">
          <video
            className="w-100 sm:w-80 md:w-110 "
            src="/video1.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

      </div>

      {/* Rotating Badge */}
      {/* <div className="absolute hidden lg:block bottom-10 right-10 z-30">
        <RotatingBadge />
      </div> */}

      {/* Custom Jumping Animation */}
      <style jsx>{`
        @keyframes jump-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .jump-slow {
          animation: jump-slow 6s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}