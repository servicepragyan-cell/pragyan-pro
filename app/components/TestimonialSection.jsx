"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
/* =======================
   DATA
======================= */

const testimonials = [
  {
    id: 1,
    rating: 4,
    text: `Fast communication, excellent design quality, and reliable service. They understood our vision and turned it into something amazing.`,
    name: "Tina Rai",
    role: "CEO, Nexella",
    avatar: "/testimonial1.webp",
  },
  {
    id: 2,
    rating: 5,
    text: `Highly professional and detail oriented. The team brought our brand to life with creative visuals and smooth collaboration.`,
    name: "Rishi Sikhavat",
    role: "Marketing Head, CompanyX",
    avatar: "/testimonial2.webp",
  },
];

/* =======================
   SVG COMPONENTS
======================= */

const StarFull = () => (
  <svg className="w-5 h-5 fill-[#f8d249]" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.566-.955L10 0l2.944 5.955 6.566.955-4.755 4.635 1.123 6.545z" />
  </svg>
);

const StarEmpty = () => (
  <svg className="w-5 h-5 fill-gray-500" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.566-.955L10 0l2.944 5.955 6.566.955-4.755 4.635 1.123 6.545z" />
  </svg>
);

/* =======================
   COMPONENT
======================= */

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  /* GSAP animation with proper context cleanup */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [current]);

  const t = testimonials[current];

  return (
    <section
      ref={containerRef}
      className="bg-black text-white px-4 py-6 lg:py-12 md:px-12 lg:px-24"
      id="testimonial"
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-16 lg:flex-row lg:items-center">
        {/* LEFT */}
        <div className="flex flex-col md:flex-row  justify-center lg:items-start gap-4 md:gap-12 lg:w-1/2">
          <div className="text-left">
            <div className="flex items-center font-extrabold justify-start mb-4 gap-2 text-2xl text-[#f8d249] font-heading">
              <span className="text-2xl font-extrabold">✦</span>TESTIMONIAL
            </div>

            <div className="text-[64px] sm:text-[80px] font-bold text-[#f8d249] leading-none mb-4 font-heading">
              4.8
            </div>

            <p className="mt-2 text-sm font-semibold">
              (5k+) Customer <br className="hidden lg:block" /> reviews
            </p>
          </div>

          <div className="relative w-full h-75 sm:h-100 lg:h-125 rounded-2xl overflow-hidden">
            <Image
              src="/testimonial4.webp"
              alt="Customers"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur px-6 py-3 rounded-full flex flex-col items-center gap-2">
              <Image
                src="/testimonial3.webp"
                alt="Avatar"
                width={80}
                height={80}
                className="rounded-full"
              />
              <span className="text-[12px] text-center font-medium">
                300+ Happy Customers
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/2 bg-[#121212] border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            What Our Happy Clients Say About Us
          </h2>

          {/* 👇 key forces remount → safe animation */}
          <div
            key={t.id}
            className="testimonial-card bg-[#1e1e1e] rounded-3xl p-6 sm:p-8"
          >
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  {i < t.rating ? <StarFull /> : <StarEmpty />}
                </span>
              ))}
            </div>

            <blockquote className="italic text-gray-300 mb-6 leading-relaxed">
              “{t.text}”
            </blockquote>

            <hr className="border-gray-700 mb-6" />

            <div className="flex items-center gap-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={160}
                height={160}
                className="rounded-full border-2 border-[#f8d249] w-20 h-20 object-cover"
              />

              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-[#f8d249]">{t.role}</p>
              </div>

              <div className="ml-auto flex gap-3">
                <button
                  onClick={() =>
                    setCurrent((p) =>
                      p === 0 ? testimonials.length - 1 : p - 1
                    )
                  }
                  className="p-2 rounded-full text-[#f8d249] hover:text-white"
                >
                  <FaArrowLeft size={18} />
                </button>

                <button
                  onClick={() =>
                    setCurrent((p) =>
                      p === testimonials.length - 1 ? 0 : p + 1
                    )
                  }
                  className="p-2 rounded-full text-[#f8d249] hover:text-white"
                >
                  <FaArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
