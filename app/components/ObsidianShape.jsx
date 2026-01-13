"use client"

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  Float, 
  MeshDistortMaterial, 
  ContactShadows,
  PerspectiveCamera
} from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Menu } from 'lucide-react';

/**
 * The core 3D Obsidian Loop component.
 * We use a standard mesh and update its properties via useFrame for maximum compatibility.
 */
function ObsidianLoop({ scrollProgress }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Get current scroll value (0 to 1)
      const s = scrollProgress.get();
      
      // Scale: Starts at 1.8, grows to 3.5 based on scroll
      const targetScale = 1.8 + (s * 1.7);
      meshRef.current.scale.setScalar(targetScale);

      // Rotation: Continuous idle + scroll influence
      meshRef.current.rotation.x = Math.sin(t / 4) * 0.2;
      meshRef.current.rotation.y = s * Math.PI * 2;
      meshRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* Custom TorusKnot produces the complex organic loop seen in the video */}
        <torusKnotGeometry args={[1, 0.35, 256, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#050505"
          speed={2}
          distort={0.4}
          radius={1}
          metalness={1}
          roughness={0.05}
          emissive="#000000"
        />
      </mesh>
    </Float>
  );
}

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
    <div className="text-2xl font-bold tracking-tighter">DIGITAL.</div>
    <button className="flex items-center gap-4 group">
      <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">Menu</span>
      <Menu size={24} strokeWidth={1.5} />
    </button>
  </nav>
);

const HeroContent = ({ scrollProgress }) => {
  // Parallax and scale effects for the "DIGITAL COVER" text
  const textY1 = useTransform(scrollProgress, [0, 0.5], [0, -250]);
  const textY2 = useTransform(scrollProgress, [0, 0.5], [0, 250]);
  const opacity = useTransform(scrollProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative h-[200vh] w-full">
      {/* Hero Section */}
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Large Background Text */}
        <div className="relative z-20 flex flex-col px-6 md:px-12 pointer-events-none select-none">
          <motion.h1 
            style={{ y: textY1 }}
            className="text-[18vw] leading-[0.75] font-black uppercase tracking-tighter text-white italic"
          >
            Digital
          </motion.h1>
          <motion.h1 
            style={{ y: textY2 }}
            className="text-[18vw] leading-[0.75] font-black uppercase tracking-tighter self-end text-white italic"
          >
            Cover
          </motion.h1>
        </div>

        {/* Bottom Bar Content */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 left-0 w-full px-12 flex flex-col md:flex-row justify-between items-end z-30"
        >
          <div className="max-w-xs space-y-4">
            <div className="h-[1px] w-12 bg-white/40" />
            <p className="text-sm font-medium leading-relaxed text-gray-400">
              Agency that covers your digital needs in a creative and efficient way.
            </p>
          </div>

          {/* Floating Action Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group mt-8 md:mt-0"
          >
            <div className="w-32 h-32 rounded-full border border-white/20 flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white cursor-pointer">
              <ArrowUpRight className="text-white group-hover:text-black transition-colors" size={24} />
              <span className="text-[10px] uppercase font-bold text-white group-hover:text-black mt-1">Start a project</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Second Section Placeholder (Scroll Reveal) */}
      <section className="relative h-screen bg-white z-40 flex items-center justify-center px-12">
        <div className="max-w-4xl text-black">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            WE DESIGN, DEVELOP AND MANAGE INNOVATIVE WEBSITES.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl font-medium">
            Optimized using SEO and conversion strategies to turn your visitors into loyal customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-[#050505] text-white selection:bg-white selection:text-black font-sans">
      <Navbar />
      
      {/* Fixed 3D Canvas that reacts to scroll */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Canvas shadows gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
          
          <Environment preset="studio" />
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <Suspense fallback={null}>
            <ObsidianLoop scrollProgress={scrollYProgress} />
            <ContactShadows 
              position={[0, -2.5, 0]} 
              opacity={0.4} 
              scale={15} 
              blur={2.5} 
              far={4.5} 
              resolution={256} 
              color="#000000" 
            />
          </Suspense>
        </Canvas>
      </div>

      <HeroContent scrollProgress={scrollYProgress} />
    </div>
  );
}