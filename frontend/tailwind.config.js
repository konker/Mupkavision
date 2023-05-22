/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2B3749",
        secondary: "#739C8E",
        neutral: "#FEFAC5",
        accentprimary: "#DF632F",
        accentsecondary: "#5B2D3A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
