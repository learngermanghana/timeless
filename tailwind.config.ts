import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3B1F2B",
          secondary: "#111111",
          accent: "#D4AF37",
          light: "#F8F5F0",
          neutral: "#EDE7DD"
        }
      },
      boxShadow: {
        luxe: "0 18px 45px -20px rgba(17,17,17,0.55)",
        soft: "0 10px 30px -18px rgba(59,31,43,0.45)"
      }
    }
  },
  plugins: []
} satisfies Config;
