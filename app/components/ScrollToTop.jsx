"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

function ScrollToTop() {

  const btnRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const onScroll = () => {

      setVisible(window.scrollY > 10);

    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)

  }, [])

  useEffect(() => {

    if (!visible || !btnRef.current) return;

    gsap.fromTo(

      btnRef.current,
      {

        scale: 0, opacity: 0,

      },
      {

        scale: 1, opacity: 1, duration: 0.3, ease: "power3.out"

      },

    )

  }, [visible])

  const handleEnter = () => {

    gsap.to(btnRef.current, {

      scale: 1.15,
      duration: 0.2,
      ease: "power3.out"

    })



  }
  const handleLeave = () => {

    gsap.to(btnRef.current, {

      scale: 1,
      duration: 0.2,
      ease: "power3.out"

    })



  }

  if (!visible) return null;

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="rounded-full shadow-xl bg-[#f8d249] scroll-top-btn"
    >
      <span>↑</span>
    </button>
  );
}

export default ScrollToTop
