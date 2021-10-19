const bgColor = require("./conf.d/tailwind_theme_bg_color.js")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => bgColor,
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
