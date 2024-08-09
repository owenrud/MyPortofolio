
/** 
 * @type {import('tailwindcss').Config} 
 * */
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      color:{
        primary:"#0B1A28",
        accent:"#DAA985",
        secondary:"#4572AB",
        secondaryAccent:"#102E47",
        gray:"#273B5C",
        winter:"#FFFEFA",
        winterGradient:"#B7D3E3"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
