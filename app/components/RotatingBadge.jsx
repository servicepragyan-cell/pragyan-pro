"use client";

import Image from "next/image";

export default function RotatingBadge() {
    return (
        <div className="relative w-40 h-40 animate-spin-slow  ">
            <svg viewBox="0 0 200 200" className="w-full h-full">

                {/* SVG Filter */}
                <defs>
                    <filter id="glassBlur">
                        <feGaussianBlur stdDeviation="6" />
                    </filter>
                </defs>

                {/* Blurred background circle */}
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="rgba(0,0,0,0.5)"
                    filter="url(#glassBlur)"
                />

                {/* Border ring */}
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="transparent"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                />

                {/* Circular text path */}
                <defs>
                    <path
                        id="circlePath"
                        d="
              M 100, 100
              m -70, 0
              a 70,70 0 1,1 140,0
              a 70,70 0 1,1 -140,0
            "
                    />
                </defs>

                {/* Text */}
                <text
                    fill="white"
                    fontSize="18"
                    letterSpacing="3"
                    fontWeight="500"
                    padding=""
                >
                    <textPath
                        href="#circlePath"
                        startOffset="50%"
                        textAnchor="middle"
                    >
                        DIGITAL AGENCY • DIGITAL AGENCY •
                    </textPath>
                </text>
            </svg>

            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center ">
                <div className="w-14 h-14 bg-[#f8d249] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-black  font-black"><img src="/s-logo.webp" alt="smalllogo" className="h-10"/></span>
                </div>
            </div>
        </div>
    );
}
