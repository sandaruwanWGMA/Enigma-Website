/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Accordition.jsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      faqbgcolor: "#4d665e",
      faqcolor: "#facc15",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        patrick: ["Patrick Hand SC", "cursive"],
      },
    },
  },
  corePlugins: {
    preflight: false,
    container: false,
    accessibility: false,
  },

  plugins: [],
};
