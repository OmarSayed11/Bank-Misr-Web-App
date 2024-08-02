/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Adjust this based on your project's file locations
  ],
  theme: {
    extend: {
      colors: {
        "primary/p300": "#871E35",
        "Primary/P400": "#5F1525",
        "Primary/P500": "#521220",
        "Primary/P50": "#F3E9EB",
        "Gray/G10": "#FBFBFB",
        "Gray/G50": "#FFFFFF",
        "Gray/G100": "#898886",
        "Gray/G300": "#6E6D6B",
        "Gray/G500": "#565552",
        "Gray/G600": "#4B4A47",
        "Gray/G700": "#3C3A37",
        "Gray/G900": "#24221E",
      },
    },
  },
  plugins: [],
};
