"use client";
import Image from "next/image";

async function Services() {
  return (
    <>
      <section className="relative bg-black text-white pt-3 md:pt-30 overflow-hidden " >
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:mt-0 md:pt-16 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-18 items-center">
      
              {/* LEFT SIDE */}
              <div className="relative order-2 md:order-1">
      
                {/* Oval Images */}
                
                  <div className="w-full h-full md:h-140 lg:h-125 overflow-hidden rounded-md">
                    <Image
                      src="/services/s1.jpg"
                      alt=""
                      width={400}
                      height={600}
                      className="md:object-cover object-contain w-full h-full md:object-center object-center rounded-md"
                    />
                  </div>
         
              </div>
      
              {/* RIGHT SIDE */}
              <div className="text-left md:mt-8 lg:mt-0 order-1 md:order-2">
                <p className="text-[#f8d249] tracking-widest mb-4 text-2xl font-heading font-extrabold">
                  <span className="text-2xl font-extrabold">✦</span> SERVICES
                </p>
                <div className="max-w-xl">
                  {/* text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 */}
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white font-heading">
                      Every brand is a{" "}
                      <span>jigsaw puzzle.</span>
                    </p>

                    <p className="text-gray-300 mt-3 leading-relaxed">
                      We provide the missing piece —
                      <span className="text-white font-medium">
                        {" "}clever ideas, sharp strategies, and campaigns
                      </span>{" "}
                      that spark connections and make brands unforgettable.
                    </p>
               </div>

               {/* services names */}
                    
              <ul className="space-y-3 mt-10">
                {[
                  "What defines a brand?",
                  "How do people know a brand exists?",
                  "What makes people believe in a brand?",
                  "How are leads turned into sales?",
                ].map((question, index) => (
                  <li
                    key={index}
                    className="group flex items-center gap-4 text-gray-300 hover:text-white transition"
                  >
                    <span className="w-6 text-[#f8d249] opacity-60 group-hover:opacity-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-md font-medium">
                      {question}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Know More Link */}
              <div className="mt-8">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#f8d249] font-medium hover:gap-3 transition-all"
                >
                  Know More
                  <span>→</span>
                </a>
              </div>
              </div>
      
            </div>
      </section>
    </>
  )
}

export default Services



