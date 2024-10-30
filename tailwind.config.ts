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
        blue: {
          50: "#f6f8ff",
          100: "#ced4fd",
          700: "#5e68ff", // Corrected color assignment with hex value
        },
      },
    },
  },
  plugins: [],
};

export default config;
