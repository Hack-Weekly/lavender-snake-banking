/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest: "#160524",
        dark: "#4A00C5",
        accent: "#3E79E5",
        grey: "#5B5B5B",
        light: "#D3E1F5",
        lightest: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
