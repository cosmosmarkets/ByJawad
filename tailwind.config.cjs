/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E6",
        "cream-muted": "#EDE8DC",
        forest: "#1B4332",
        "forest-light": "#2D6A4F",
        ink: "#1A1A18",
        riso: "#E94B3C",
      },
      fontFamily: {
        display: ['"Clash Display"', "system-ui", "sans-serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

