// "use client";

// import Image from "next/image";
// import gsap from "gsap";
// import { useEffect, useRef } from "react";

// export default function PortfolioClient({ project }) {
//     const contentRef = useRef(null);

//     useEffect(() => {
//         if (!contentRef.current) return;

//         const ctx = gsap.context(() => {
//             gsap.fromTo(
//                 contentRef.current.children,
//                 { opacity: 0, y: 40 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     stagger: 0.15,
//                     ease: "power3.out",
//                 }
//             );
//         }, contentRef);

//         return () => ctx.revert(); // ✅ CRITICAL CLEANUP
//     }, []);

//     return (
//         <>
//             <div
//                 ref={contentRef}
//                 className="max-w-7xl mx-auto space-y-8 grid md:grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center"
//             >
//                 <div className="relative w-full h-[200px] md:h-[600px] rounded-2xl overflow-hidden">
//                     <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         className="h-full w-full"
//                         priority
//                     />
//                 </div>

//                 <div className=" grid md:gap-3" >
//                     <h1 className="text-3xl md:text-4xl font-semibold">
//                         {project.title}
//                     </h1>

//                     <p className="text-xl text-[#FCDB66]">
//                         {project.subtitle}
//                     </p>

//                     <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
//                         {project.content}
//                     </p>
//                 </div>


//             </div>
//         </>
//     );
// }
