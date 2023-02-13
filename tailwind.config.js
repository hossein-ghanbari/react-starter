/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  plugins: [require("preline/plugin")],
  theme: {
    extend: {
      fontFamily: {
        yekan: ["IRANYekanWeb"]
      },
      fontSize: {
        xxs: ".60rem"
      },
      colors: {
        primary: {
          light: "#2b4a6b",
          DEFAULT: "#1b334d",
          dark: "#0d1e30"
        },
        secondary: "#47cfcb",
        tdark: "#0d1e30"
      },
      zIndex: {
        1: 1,
        79: 9,
        75: 75,
        99: 99,
        100: 100,
        999: 999,
        1000: 1000
      }
    }
  }
};
