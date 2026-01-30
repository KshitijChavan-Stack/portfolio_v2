import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#e5f4ff",
        accent: {
          DEFAULT: "#22d3ee",
          soft: "#0f172a"
        }
      },
      boxShadow: {
        "glow-cyan": "0 0 40px rgba(34, 211, 238, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;

