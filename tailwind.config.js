/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        sans_serif: ["Open Sans", "sans-serif"],
      },
    },
    colors: {
      primary: "#F67172",
      secondary: "#FCB973",
      text_dark: "#11172D",
      light_primary: "#f78d8d",
      text_light: "#FDFCFE",
      gray: "#FCFCFF",
      linkColor: "#000FFF",
      light: "#ffffff",
      darkGray: "rgb(156 163 175)",
      lite_gray: "#eeeeee",
      // linkColor : '#000FFF',
      transparent: "transparent",
    },
    font: {
      font_mono:
        'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
    },
  },
  plugins: [],
};
