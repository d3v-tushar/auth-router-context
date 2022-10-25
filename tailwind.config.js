/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    themes: ["night"],
    extend: {},
  },
  plugins: [require("daisyui")],
}
