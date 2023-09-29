/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}','"./node_modules/tw-elements/dist/js/**/*.js"'],
  darkMode: true, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
  },

  // eslint-disable-next-line no-undef
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

