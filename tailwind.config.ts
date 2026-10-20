import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07040F",
        plum: { DEFAULT: "#120A24", 2: "#1A1033" },
        violet: { DEFAULT: "#7C3AED", light: "#A78BFA" },
        orchid: "#E879F9",
        gold: { DEFAULT: "#F6C453", deep: "#E39B2D" },
        mist: "#EDE9FE",
      },
      // Tailwind 3.3 não traz estes níveis de transparência por defeito
      opacity: { 15: "0.15", 35: "0.35", 45: "0.45", 55: "0.55", 65: "0.65" },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        beam: { "0%,100%": { opacity: ".55" }, "50%": { opacity: ".85" } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        carrossel: "marquee 45s linear infinite",
        float: "float 6s ease-in-out infinite",
        beam: "beam 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
