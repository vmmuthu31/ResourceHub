
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
        },
        resource: {
          frontend: "#FEC6A1",
          backend: "#D3E4FD",
          blockchain: "#E5DEFF",
        },
      },
      keyframes: {
        "card-hover": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "card-lift": "card-hover 0.2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
