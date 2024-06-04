/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        lightRed: "hsl(356, 100%, 66%)",
        veryLightRed: "hsl(355, 100%, 74%)",
        veryDarkBlue: "hsl(208, 49%, 24%)",
        grayishBlue: "hsl(240, 2%, 79%)",
        veryDarkGrayishBlue: "hsl(207, 13%, 34%)",
        veryDarkBlackBlue: "hsl(240, 10%, 16%)",
      },
      backgroundImage: {
        mobile: "url('/images/bg-pattern-into-mobile.svg')",
        desktop: "url('/images/bg-pattern-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
