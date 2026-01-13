// MobiusScene.jsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import MobiusSquare from "./MobiusSquare";

export default function MobiusScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <Float speed={1.5} rotationIntensity={0.7} floatIntensity={0.8}>
        <MobiusSquare />
      </Float>

      <Environment preset="city" />
    </Canvas>
  );
}
