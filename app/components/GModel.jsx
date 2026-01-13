"use client";

import { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const GModel = forwardRef(function GModel(_, ref) {
  const { scene } = useGLTF("/g.glb");

  useEffect(() => {
    // 🔥 FIX MODEL PIVOT
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());

    scene.position.sub(center); // move geometry to (0,0,0)
  }, [scene]);

  return <primitive ref={ref} object={scene} />;
});

export default GModel;
