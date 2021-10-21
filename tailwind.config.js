const Color = require('./conf.d/tailwind_theme_bg_color.js');

module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extendd: {},
    colors: Color,
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
