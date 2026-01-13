import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapText(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current.children,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: options.stagger || 0.12,
        scrollTrigger: options.scroll
          ? {
              trigger: ref.current,
              start: "top 80%",
            }
          : null,
      }
    );
  }, []);
}
