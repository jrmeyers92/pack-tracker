/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#398378",
          50: "#9FD5CD",
          100: "#90CFC6",
          200: "#74C2B7",
          300: "#57B6A8",
          400: "#459F92",
          500: "#398378",
          600: "#285C54",
          700: "#173530",
          800: "#060E0D",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
