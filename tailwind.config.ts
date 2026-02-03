import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B0F",
        obsidian: "#0F1117",
        graphite: "#1B1F2A",
        accent: "#7C8CF4",
        mist: "#A2A8B5"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 140, 244, 0.18)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" }
        }
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        pulseSoft: "pulseSoft 10s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
