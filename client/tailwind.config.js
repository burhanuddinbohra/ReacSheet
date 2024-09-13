/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SUSE: ["SUSE", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", // default theme
      "dark", // dark theme
      "cupcake", // other predefined themes
      // You can include any other predefined theme here
    ],
  },
};
