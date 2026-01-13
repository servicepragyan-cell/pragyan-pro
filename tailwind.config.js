// import scrollbarHide from "tailwind-scrollbar-hide";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         "spin-slow": "spin 14s linear infinite",
//       },
//     },
//   },
//   plugins: [scrollbarHide],
// };


import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
        heading: ["var(--font-nexa)"],
      },
    },
  },
  plugins: [scrollbarHide],
};







