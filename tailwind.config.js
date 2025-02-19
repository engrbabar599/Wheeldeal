/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"],
        "inter": ["Inter"],
        "open-sans": ["Open Sans"],
        "lato": ["Lato"],
        "dm-sans": ["DM Sans"],
        "Work-sans": ["Work Sans"],
        "hk-grotesk": ["Hanken Grotesk"],
        "plus-jakarta-sans": ["Plus Jakarta Sans"],
        "public-sans": ["Public Sans"],
      },
      colors: {
        "custom-red": "#F43A3A",
        "custom-blue": "#6F9CFF",
        "custom-green": "#3EB14A",
        "custom-gray": "#F5F5F5",
        gray: {
          "1": "#333333",
          "2": "#4F4F4F",
          "4": "#828282",
          "5": "#E0E0E0"
        }
      },
       boxShadow: {
        '3xl': '0 35px 60px -13px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}