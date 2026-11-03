import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B1F3B",
          800: "#0E2A52",
          700: "#143364"
        },
        gold: {
          600: "#C2A77E",
          500: "#E9DFCF",
          400: "#FAF8F4"
        },
        cream: "#FAF8F4"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
