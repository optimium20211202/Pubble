const normalize = (remValue) => {
  return remValue.toFixed(4).replace(/\.?0+$/, "");
};
const toRem = (value) => {
  const px = parseInt(value);
  const rem = px / 16;
  return `${normalize(rem)}rem`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        "gray-base": "#444444",
        tundora: "#888888",
        "blue-base": "#4DABE0",
        "red-base": "#D45454",
        "green-base": "#41B55A",
        defaultBg: "#F0F0F0",
        recommendationBg: "#B4A369",
      },
      boxShadow: {
        base: "0px 0px 12px 0px rgba(0, 0, 0, 0.12);",
      },
      borderRadius: {
        "4xl": "1.875rem",
      },
      borderWidth: {
        3: "3px",
      },
      spacing: {
        xs: toRem("12px"),
        sm: toRem("24px"),
        md: toRem("36px"),
        lg: toRem("48px"),
        xl: toRem("60px"),
      },
    },
  },
  plugins: [],
};
