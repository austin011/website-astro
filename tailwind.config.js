import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
    extract,
  },

  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    extend: {
      screens: {
        xs: "20rem",
      },
      colors: {
        accent: "#6741D9",
        secondary: "#D0BFFF",
      },
    },
  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
  ],
};
