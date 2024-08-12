import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        normalBlack: "#111111",
        meloWhite: "#faf4f0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      mobile: "640px",
      tablet: "768px",
      laptop: "1024px",
      xl: "1200px",
      desktop: "1280px",
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
};
export default config;
