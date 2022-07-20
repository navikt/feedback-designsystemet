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
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
