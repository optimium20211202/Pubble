/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "lemonade"],
  },
  plugins: [require("daisyui")],
};
