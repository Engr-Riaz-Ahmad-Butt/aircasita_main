/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        new: "0px 4px 4px 0px #00000040"
      },
      colors: {
        primary: "#008080",
        lightPrimary: "#CCE6E6",
        bluePrimary: "#0890FF",
        indigoPrimary: "#455EED",
        lightBluePrimary: "#0498B3",
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1920px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans"],
      },
      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        padding: "1rem",

        // default breakpoints but with 40px removed
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
          "3xl": "1580px",
        },
      },
      borderRadius: {
        4: "4px",
      },
    },
  },
  plugins: [],
};
