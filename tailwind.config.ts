import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070707",
        graphite: "#121212",
        copper: "#ff6b00",
        amberSoft: "#ffb15f",
        mist: "#f8f5f1",
      },
      boxShadow: {
        glow: "0 0 38px rgba(255, 107, 0, 0.28)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        copper: "linear-gradient(135deg, #ff6b00 0%, #ff9f45 48%, #ffd1a6 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
