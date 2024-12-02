import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "custom-red": "rgba(255, 49, 49, 0.5)",
        "custom-blue": "rgba(0, 255, 255, 0.5)",
        "custom-green": "#62A92B",
        "deep-green": "rgba(6, 64, 43, 1)",
        "custom-orange": "rgba(255, 255, 113, 0.5)",
        "dark-bg": "#272730",
        "custom-white": "#dee2e6",
      },
      fontFamily: {
        dmMono: ["DM Mono", "monospace"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "right-left": "right-left 16s linear infinite",
        "left-right": "left-right 32s linear infinite",
        "float-in": "float-in 3s ease-in-out infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        "right-left": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        "left-right": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "float-in": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10)" },
        },
      },
      screens: {
        base: "480px",
        xs: "360px",
      },
      backgroundImage: {
        "grid-like":
          "linear-gradient(to right, gray 0.5px, transparent 0.5px), linear-gradient(to bottom, gray 0.5px, transparent 0.5px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
