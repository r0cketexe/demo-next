import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    mytheme: {
      primary: "#60a5fa",
      secondary: "#c4b5fd",
      accent: "#a7f3d0",
      neutral: "#60a5fa",
      "base-100": "#ffffff",
      info: "#f3f4f6",
      success: "#bef264",
      warning: "#fde68a",
      error: "#f87171",
    },
  },
  plugins: [require("daisyui")],
};
export default config;
