// MobiusMain.jsx
"use client";

import dynamic from "next/dynamic";

const MobiusScene = dynamic(() => import("./three/MobiusScene"), {
  ssr: false,
});

export default function MobiusMain() {
  return (
    <section className="h-screen bg-black flex items-center justify-center">
      <div className="w-[320px] h-[320px] md:w-[520px] md:h-[520px]">
        <MobiusScene />
      </div>
    </section>
  );
}
