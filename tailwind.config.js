/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Adjust this based on your project's file locations
  ],
  theme: {
    extend: {
      colors: {
        "primary/p300": "#871E35",
        "Primary/P500": "#521220",
        "Primary/P50": "#F3E9EB",
        "Gray/G700": "#3C3A37",
        "Gray/G900": "#24221E",
      },
    },
  },
  plugins: [],
};
