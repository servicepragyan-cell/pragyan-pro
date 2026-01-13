// export default function Loading() {
//   return (
//     <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
//       <h1 className="text-white text-2xl tracking-widest mb-4">
//         PRAGYAN
//       </h1>

//       <div className="w-64 h-1 bg-gray-800 rounded overflow-hidden">
//         <div className="h-1 bg-[#f8d249] animate-pulse w-full" />
//       </div>
//     </div>
//   );
// }






// components/Loader.tsx
"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { initLoaderScene, destroyScene } from "@/lib/threeLoaderScene"

export default function Loading({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const { collapseToCenter } = initLoaderScene(containerRef.current)

    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        onComplete()
      },
    })

    tl.to(".loader-text", {
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    })
      .to(".loader-text", {
        opacity: 0,
        duration: 0.8,
      })
      .add(() => collapseToCenter())
      .to(containerRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
      })

    return () => destroyScene()
  }, [onComplete])

  return (
    <div ref={containerRef} className="loader-container">
      <div className="loader-text">Initializing System</div>
    </div>
  )
}
