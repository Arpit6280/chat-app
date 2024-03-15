/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "20%": "20%",
      },
      left: {
        "20%": "20%",
      },
    },
  },
  plugins: [],
};
