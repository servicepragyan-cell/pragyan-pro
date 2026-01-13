"use client";

import Image from "next/image";
import RotatingBadge from "@/app/components/RotatingBadge";
import { TrendingUp, PenTool } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="relative bg-black text-white mt-20 lg:my-10 overflow-hidden" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:py-16 grid lg:grid-cols-2 gap-2 md:gap-12 lg:gap-10 items-center">

        {/* RIGHT SIDE */}
        <div className="text-left md:mt-8 lg:mt-0">
          <p className="text-[#f8d249] tracking-widest mb-4 text-2xl font-heading font-extrabold">
            <span className="text-2xl font-extrabold">✦</span> WHY CHOOSE US?
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Here’s Why Brands Trust <br className="hidden sm:block" /> Our Expertise
          </h2>

          <p className="text-gray-300 max-w-xl lg:mx-0 mb-10 text-sm sm:text-base">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </p>

          {/* Feature Cards */}
          <div className="space-y-5">
            <div className="border border-white/10 rounded-2xl p-5 sm:p-6 flex gap-4 items-start">
              <TrendingUp size={36} color="#FCDB66" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold mb-1">Cross-Platform Development</h4>
                <p className="text-gray-300 text-sm">
                  It is a long established fact that a reader will be distracted.
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-5 sm:p-6 flex gap-4 items-start">
              <PenTool size={36} color="#FCDB66" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold mb-1">Data-Driven Strategy</h4>
                <p className="text-gray-300 text-sm">
                  It is a long established fact that a reader will be distracted.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT SIDE */}
        <div className="relative">

          {/* Oval Images */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
            <div className="w-full h-105 md:w-80 md:h-140 lg:w-75 lg:h-125 rounded-[80px] md:rounded-full overflow-hidden">
              <Image
                src="/about-image1.webp"
                alt=""
                width={400}
                height={600}
                className="object-cover w-full h-full md:object-center object-top "
              />
            </div>

            <div className="hidden md:block w-80 h-140 lg:w-75 lg:h-115 rounded-[80px] md:rounded-full overflow-hidden md:mt-20">
              <Image
                src="/about-image2.webp"
                alt=""
                width={400}
                height={600}
                className="object-cover w-full h-full md:object-center object-top"
              />
            </div>
          </div>

          {/* Rotating Badge */}
          <div className="absolute -top-15 right-4 md:top-6 md:right-70 lg:left-55 lg:top-8 ">
            <RotatingBadge />
          </div>

          {/* Testimonial Card */}
          {/* <div className="relative md:absolute bottom-16 md:-bottom-16 md:left-18 lg:-bottom-16 lg:left-6 mt-12 md:mt-0 bg-[#f8d249] text-black rounded-3xl py-6 px-4 w-50 lg:py-8 lg:px-6 lg:w-55 shadow-2xl text-center">
            <div className="flex items-center justify-center mb-2">
              <Image
                src="/ceo.webp"
                alt=""
                width={74}
                height={74}
                className="rounded-full object-cover h-16 "
              />
            </div>

            <p className="font-semibold text-base">Dhruv Singhada</p>
            <p className="text-balance">CTO, Pragyan</p>

            <div className="mt-2 text-2xl font-signature">Signature</div>
          </div> */}
        </div>



      </div>
    </section>
  );
}
