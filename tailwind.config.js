/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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

  plugins: [],
};
