module.exports = {
  darkMode: "media",
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      logo: "Candal",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease infinite",
      },
      colors: {
        primary: {
          50: "#D9F9E7",
          100: "#B2F2C9",
          200: "#8EDA9C",
          300: "#6CB77B",
          400: "#4D9C5C",
          500: "#36944A",
          600: "#2D7C3E",
          700: "#1E5D2E",
          800: "#0D3A1E",
          900: "#041909",
        },
        secondary: {
          50: "#9AA6B3",
          100: "#7A8B9E",
          200: "#5A6572",
          300: "#454F55",
          400: "#343A40",
          500: "#212529",
          600: "#1C1F23",
          700: "#17191D",
          800: "#0D0D0D",
          900: "#000000",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
