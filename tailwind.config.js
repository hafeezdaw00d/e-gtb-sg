module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "real-gray": "#F0EFEF",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
