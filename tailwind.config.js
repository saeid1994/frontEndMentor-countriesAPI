// const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      // colors: {

      // },
      fontFamily: {
        custom: ["Nunito Sans"],
      },
    },
  },
  // plugins: [
  //   createThemes({
  //     dark: {
  //       darkBlue: "hsl(209, 23%, 22%)",
  //       veryDarkBlue: "hsl(207, 26%, 17%)",
  //       whiteDarkModeText: "hsl(0, 0%, 100%)",
  //     },
  //     light: {
  //       veryDarkBlueLightMode: "hsl(200, 15%, 8%)",
  //       darkGrayLightModeInput: "hsl(0, 0%, 52%)",
  //       veryLightGrayLightModeBackground: "hsl(0, 0%, 98%)",
  //       whiteLightModeElements: "hsl(0, 0%, 100%)",
  //     },
  //   }),
  // ],
};
