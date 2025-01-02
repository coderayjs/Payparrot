/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "kp-red": "#black", // Kind Parrot Red
        "kp-black": "#09090B", // Kind Parrot Black
        "kp-white": "#000000", // Kind Parrot White
        "kp-yellow": "#32CD32", // Kind Parrot Yellow/Lemon
        "kp-green": "#008000", // Kind Parrot Green
        "kp-lime": "#32CD32", // Kind Parrot Lime Green
        background: "#FFFAEC", // white background
        text: {
          primary: "#00000",
          secondary: "#00000",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 