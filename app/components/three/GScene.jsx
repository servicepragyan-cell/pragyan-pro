"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useRef, useEffect, forwardRef } from "react";
import * as THREE from "three";
import GModel from "../GModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SceneInner({ forwardedRef }) {
  const outerGroupRef = useRef();   // GSAP controls this
  const innerGroupRef = useRef();   // Mouse controls this
  const mouse = useRef({ x: 0, y: 0 });
  const tl = useRef();

  /* -------------------------------
     MOUSE MOVE (SUBTLE TILT)
  -------------------------------- */
  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* -------------------------------
     SCROLL → ROTATE + SCALE (OUTER GROUP)
  -------------------------------- */
  useEffect(() => {
    if (!outerGroupRef.current) return;

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-section",
        start: "top top",
        end: "+=260%",
        scrub: 2,
        pin: true,
      },
    });

    tl.current
      // ROTATION
      .fromTo(
        outerGroupRef.current.rotation,
        { y: -0.4 },
        { y: Math.PI * 2.2, ease: "none" },
        0
      )

      // SCALE (STRONG)
      .fromTo(
        outerGroupRef.current.scale,
        { x: 1, y: 1, z: 1 },
        { x: 10, y: 10, z: 10 },
        0
      )

      // DEPTH PUSH (CENTER SAFE)
      .fromTo(
        outerGroupRef.current.position,
        { z: 0 },
        { z: -12, ease: "none" },
        0
      );

    return () => {
      tl.current.scrollTrigger?.kill();
      tl.current.kill();
    };
  }, []);

  /* -------------------------------
     FRAME LOOP (MOUSE → INNER GROUP ONLY)
  -------------------------------- */
  useFrame(() => {
    if (!innerGroupRef.current) return;

    // tilt
    innerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      innerGroupRef.current.rotation.x,
      mouse.current.y * 0.15,
      0.03
    );

    // parallax (SAFE, no drift)
    innerGroupRef.current.position.x = THREE.MathUtils.lerp(
      innerGroupRef.current.position.x,
      mouse.current.x * 0.15,
      0.02
    );

    innerGroupRef.current.position.y = THREE.MathUtils.lerp(
      innerGroupRef.current.position.y,
      mouse.current.y * 0.12,
      0.02
    );
  });

  return (
    <>
      {/* OUTER GROUP → GSAP */}
      <group
        ref={outerGroupRef}
        position={[0, 0, 0]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, Math.PI / 2, 0]}
      >
        {/* INNER GROUP → MOUSE */}
        <group ref={innerGroupRef}>
          <GModel ref={forwardedRef} />
        </group>
      </group>

      <Environment preset="studio" />
    </>
  );
}

const GScene = forwardRef(function GScene(_, forwardedRef) {
  return (
    <div
      id="scroll-section"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Canvas camera={{ position: [6, 0.8, 6.5], fov: 42 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[9, 0, 9]} intensity={0.5} />
        <Suspense fallback={null}>
          <SceneInner forwardedRef={forwardedRef} />
        </Suspense>
      </Canvas>
    </div>
  );
});

export default GScene;
