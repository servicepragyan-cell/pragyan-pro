import React from "react";
import Link from "next/link";

function AboutUs() {
  return (
    <>
      {/* About Us */}
      <section id="about-us" className="bg-black py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Label */}
          <div className="flex items-center font-extrabold mb-4 gap-2 text-2xl font-heading text-[#f8d249]">
            <span className="text-2xl">✦</span> ABOUT US
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
            Pragyan is where brands come to think bigger.
          </h2>

          {/* Brand Statement */}
          <p className="text-xl md:text-2xl font-light text-gray-200 mt-6 leading-relaxed max-w-3xl">
            <span className="text-[#f8d249] font-extrabold">Pragyan</span> is the
            brain your brand has been looking for. We don’t just make campaigns —
            we craft experiences that elevate your brand, connect with
            audiences, and build a presence that endures.
          </p>

          {/* Know More Button */}
          <Link
            href="/aboutus"
            className="inline-block mt-10 px-8 py-4
                       border border-[#f8d249]
                       text-[#f8d249] font-semibold tracking-wide
                       hover:bg-[#f8d249] hover:text-black
                       transition-all duration-300 rounded-md"
          >
            Know More →
          </Link>

        </div>
      </section>
    </>
  );
}

export default AboutUs;
