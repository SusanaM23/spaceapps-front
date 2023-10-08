/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    /* colors: {
      primary: '#133a55ff',
      secondary: '#133a55ff',
      // ...
    } */
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

