/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  //
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1273eb",

          secondary: "#f0c7fc",

          accent: "#a0dfff",

          neutral: "#1B2027",

          "base-100": "#FCFCFD",

          info: "#AAD9E9",

          success: "#30D595",

          warning: "#C58907",

          error: "#FB2723",
          dark: "#363848",
        },
      },
    ],
  },
  //
  plugins: [require("daisyui")],
};
