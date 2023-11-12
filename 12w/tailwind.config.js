/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "text-color": "#eee",
      "text-color-light": "#bbb",
      "primary-color": "rgb(247, 196, 55)",
      "border-light": "rgb(247, 196, 55, 0.3)",
      "bg-color": "#111",
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
