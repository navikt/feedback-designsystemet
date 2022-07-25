/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@navikt/ds-tailwind")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          "regal-blue": "#243c5a",
        },
        boxShadow: {
          "card":
            "0px 2px 4px rgba(38, 38, 38, 0.2), 0px 1px 6px rgba(0, 0, 0, 0.14), 0px 2px 8px rgba(38, 38, 38, 0.12)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
