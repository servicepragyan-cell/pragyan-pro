"use client";

import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function createMobiusSquareGeometry({
  size = 2,
  width = 0.35,
  segments = 300,
}) {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const indices = [];

  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2;

    const x =
      Math.abs(Math.cos(t)) > Math.abs(Math.sin(t))
        ? Math.sign(Math.cos(t)) * size
        : Math.cos(t) * size;

    const y =
      Math.abs(Math.sin(t)) > Math.abs(Math.cos(t))
        ? Math.sign(Math.sin(t)) * size
        : Math.sin(t) * size;

    const twist = t / 2;
    const dx = Math.cos(twist) * width;
    const dy = Math.sin(twist) * width;

    vertices.push(x + dx, y + dy, width);
    vertices.push(x - dx, y - dy, -width);
  }

  for (let i = 0; i < segments * 2; i += 2) {
    indices.push(i, i + 1, i + 2);
    indices.push(i + 1, i + 3, i + 2);
  }

  geometry.setIndex(indices);
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  geometry.computeVertexNormals();

  return geometry;
}

export default function MobiusSquare() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.25;
    meshRef.current.rotation.y += delta * 0.4;
  });

  return (
    <mesh ref={meshRef} geometry={createMobiusSquareGeometry({})}>
      <meshStandardMaterial
        color="#7c7cff"
        metalness={0.85}
        roughness={0.2}
      />
    </mesh>
  );
}
