"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [bgBlack, setBgBlack] = useState(false);

  const menuItemsRef = useRef([]);
  const menuBgRef = useRef(null);
  const menuIconRef = useRef(null);
  const closeIconRef = useRef(null);
  const menuStrokeRef = useRef(null);
  const closeStrokeRef = useRef(null);
  const tl = useRef(null);

  const lastScrollY = useRef(0);

  /* =========================
     HEADER SCROLL BEHAVIOR
  ========================== */
 useEffect(() => {
  // If small screen → disable scroll behavior completely
  if (window.innerWidth < 1024) {
    setShowHeader(true);
    setBgBlack(false);
    return;
  }

  let lastScrollY = window.scrollY;

  const onScroll = () => {
    const currentScrollY = window.scrollY;

    // Scroll down → hide header
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowHeader(false);
    }
    // Scroll up → show header
    else {
      setShowHeader(true);
    }

    setBgBlack(currentScrollY > 80);
    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none"; // mobile safety
  } else {
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
  };
}, [menuOpen]);

  /* =========================
     GSAP MENU TIMELINE (FASTER)
  ========================== */
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .fromTo(
        menuBgRef.current,
        { scale: 0.9, opacity: 0, filter: "blur(20px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.3, // faster
          ease: "power3.out",
        }
      )
      .fromTo(
        menuItemsRef.current,
        { x: -120, opacity: 0, skewX: -8 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.4, // faster
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.2"
      );
  }, []);

  /* =========================
     FUNCTION: HOVER STROKE ANIMATION
  ========================== */
  const addHoverStrokeAnimation = (iconRef, strokeRef) => {
    if (!iconRef.current || !strokeRef.current) return;

    const icon = iconRef.current;
    const stroke = strokeRef.current;
    const length = stroke.getTotalLength();

    // default stroke visible
    gsap.set(stroke, { strokeDasharray: length, strokeDashoffset: 0 });

    const enter = () => {
      gsap.fromTo(
        stroke,
        { strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" }
      );
    };

    const leave = () => {
      gsap.to(stroke, {
        strokeDashoffset: length,
        duration: 0.4,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: () => gsap.set(stroke, { strokeDashoffset: 0 }),
      });
    };

    icon.addEventListener("mouseenter", enter);
    icon.addEventListener("mouseleave", leave);

    return () => {
      icon.removeEventListener("mouseenter", enter);
      icon.removeEventListener("mouseleave", leave);
    };
  };

  /* =========================
     MENU / CLOSE HOVER EFFECTS
  ========================== */
  useEffect(() => {
    const removeMenuHover = addHoverStrokeAnimation(menuIconRef, menuStrokeRef);
    const removeCloseHover = addHoverStrokeAnimation(closeIconRef, closeStrokeRef);

    return () => {
      removeMenuHover?.();
      removeCloseHover?.();
    };
  }, [menuOpen]);

  /* =========================
     OPEN / CLOSE MENU
  ========================== */
  useEffect(() => {
    if (tl.current) {
      if (menuOpen) tl.current.play();
      else tl.current.reverse();
    }
  }, [menuOpen]);

  const menuLinks = [
    { label: "Home", href: "" },
    { label: "Services", href: "services" },
    { label: "Portfolio", href: "portfolio" },
    { label: "About Us", href: "aboutus" },
    { label: "Contact Us", href: "contactus" },
    { label: "Careers", href: "careers" },
    { label: "Blog", href: "blog" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between text-white transition-all duration-500
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${bgBlack ? "bg-black/80 backdrop-blur" : "bg-black/80 backdrop-blur"}`}
      >
        <Link href="/" className="p-2" onClick={() => setMenuOpen(false)}>
          <img src="/logo/Pragyan_logo.webp" alt="Pragyan" className="h-10 p-1 md:p-0" />
        </Link>

        {/* MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex items-center gap-3 cursor-pointer"
        >
          {menuOpen ? (
            // Close icon smaller inside same square
            <span ref={closeIconRef} className="w-8 h-8 relative flex items-center justify-center">
              
              <X size={18} /> {/* smaller close icon */}
              <svg viewBox="0 0 36 36" className="absolute w-full h-full top-0 left-0">
                <rect
                  ref={closeStrokeRef}
                  x="2"
                  y="2"
                  width="32"
                  height="32"
                  rx="4"
                  ry="4"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </span>
          ) : (
            <>
              <span className="font-heading font-medium">Menu</span>
              <span ref={menuIconRef} className="w-8 h-8 relative flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <rect
                    ref={menuStrokeRef}
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="4"
                    ry="4"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </>
          )}
        </button>
      </nav>

      {/* ================= FULLSCREEN MENU ================= */}
     <div
  ref={menuBgRef}
  className={`fixed inset-0 z-40 bg-black
  md:ps-30 ps-10
  ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
>
  {/* SCROLL CONTAINER */}
  <div className="h-full pt-30 overflow-y-auto overscroll-contain">
    <div className="space-y-7 text-start">
      {menuLinks.map((item, index) => (
        <Link
          key={item.label}
          href={`/${item.href}`}
          onClick={() => setMenuOpen(false)}
          ref={(el) => (menuItemsRef.current[index] = el)}
          className="group relative block w-fit"
        >
          <span
            className="
              inline-block
              text-3xl md:text-4xl lg:text-4xl
              font-bold text-white
              transition-all duration-500 ease-out
              group-hover:translate-x-4
              group-hover:text-white
            "
          >
            {item.label}
          </span>

          <span
            className="
              absolute left-0 -bottom-2
              h-[3px] w-0
              bg-white
              transition-all duration-500 ease-out
              group-hover:w-full
            "
          />
        </Link>
      ))}
    </div>
  </div>
</div>

    </>
  );
}
