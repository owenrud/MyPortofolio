const flowbite = require("flowbite-react/tailwind");
/** 
 * @type {import('tailwindcss').Config} 
 * */
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
        "gradient-fancy": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-fancy": "gradient-fancy 8s linear infinite",
      },
    colors:{
      color:{
        primary:"#C3EEFA",
        accent:"#C49C48",
        accent2:"#FDFD96",
        secondary:"#041A40",

      }
    },
  },
  plugins: [require("flowbite/plugin"),flowbite.plugin(),],
};
