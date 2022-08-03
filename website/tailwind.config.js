/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@navikt/ds-tailwind")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
      xxxl: "2200px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      extend: {
        colors: {
          "regal-blue": "#243c5a",
        },
        boxShadow: {
          card: "0px 2px 4px rgba(38, 38, 38, 0.2), 0px 1px 6px rgba(0, 0, 0, 0.14), 0px 2px 8px rgba(38, 38, 38, 0.12)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
