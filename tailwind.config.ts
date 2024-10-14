import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
      },
      animation: {
        "rotate-0-0": "rotate 20s linear infinite",
        "rotate-1-0": "rotate 25s linear infinite",
        "rotate-2-0": "rotate 30s linear infinite",
        "rotate-2-1": "rotate 30s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
export default config;
