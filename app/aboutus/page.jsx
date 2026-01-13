// import Image from "next/image";

import AboutUs from "./AboutUs";

function About() {
  return (

    <>
      <AboutUs/>
    </>
    // <section className="my-24 py-20 px-6 md:px-12 relative overflow-hidden">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Section Label */}
    //     <div className="flex items-center gap-3 text-2xl font-heading font-extrabold text-[#f8d249] mb-6">
    //       <span className="text-3xl">✦</span> About Us
    //     </div>

    //     {/* Main Heading */}
    //     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white font-heading max-w-4xl">
    //       Pragyan is where brands come to{" "}
    //       <span className="bg-gradient-to-r from-[#f8d249] to-[#ffe28a] bg-clip-text text-transparent">
    //         think bigger
    //       </span>
    //       .
    //     </h2>

    //     {/* Intro */}
    //     <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 max-w-4xl">
    //       We are a hub of curious minds, restless creators, and problem-solvers,
    //       constantly looking for ways to push brands beyond the obvious. Our team
    //       operates like a finely tuned{" "}
    //       <span className="text-white font-medium">neural network</span> — every
    //       connection matters.
    //     </p>

    //     {/* Core Content */}
    //     <div className="mt-14 space-y-10 max-w-5xl">
    //       {[
    //         "We collaborate across design, content, digital, and experiential work, debating and refining ideas until they achieve maximum impact. Like a brain firing at full potential, we explore questions, test possibilities, and turn challenges into opportunities.",
    //         "We believe every brand has a unique identity, and it’s our job to help it shine in ways that matter. Our focus is on clarity in communication, intelligence in execution, and creativity that leaves a lasting impression.",
    //         "Each project is approached thoughtfully, ensuring ideas are not just seen, but felt and remembered.",
    //       ].map((text, i) => (
    //         <div
    //           key={i}
    //           className="relative pl-6 border-l border-[#f8d249]/30"
    //         >
    //           <span className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-[#f8d249]" />
    //           <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
    //             {text}
    //           </p>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Meet the Founders */}
    //     <div className="mt-24">
    //       <div className="flex items-center gap-3 text-2xl font-heading font-extrabold text-[#f8d249] mb-4">
    //         <span className="text-3xl">✦</span> Meet the Founders
    //       </div>

    //       <div
    //         className="mt-6 p-6 md:p-8 rounded-2xl 
    //         bg-white/5 backdrop-blur-md border border-white/10
    //         max-w-5xl"
    //       >
    //         <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
    //           Built by creative minds with a strategic core, Pragyan’s founders
    //           lead with{" "}
    //           <span className="text-white font-medium">
    //             curiosity, intention, and clarity
    //           </span>
    //           . Their combined experience and shared vision drive the agency to
    //           craft ideas that are not only visually compelling, but thoughtfully
    //           executed and purpose-driven.
    //         </p>
    //       </div>

    //       {/* Founders Images */}
    //       <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
    //         {[
    //           {
    //             img: "/services/founders/f1.webp",
    //             name: "Founder Name",
    //             role: "Founder & Strategy",
    //           },
    //           {
    //             img: "/services/founders/f2.webp",
    //             name: "Founder Name",
    //             role: "Co-Founder & Creative",
    //           },
    //           {
    //             img: "/services/founders/f3.webp",
    //             name: "Founder Name",
    //             role: "Co-Founder & Operations",
    //           },
    //         ].map((founder, i) => (
    //           <div
    //             key={i}
    //             className="group text-center p-6 rounded-md
    //             bg-white/5 backdrop-blur-md border border-white/10
    //             hover:border-[#f8d249]/40 transition-all duration-500
    //             hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(248,210,73,0.35)]"
    //           >
    //             <div className="relative w-40 h-40 mx-auto mb-6">
    //               <Image
    //                 src={founder.img}
    //                 alt={founder.name}
    //                 fill
    //                 className="object-cover rounded-full border-4 border-[#f8d249]/60"
    //               />
    //             </div>

    //             <h3 className="text-xl font-semibold text-white font-heading">
    //               {founder.name}
    //             </h3>
    //             <p className="text-[#f8d249] mt-1">{founder.role}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default About;
