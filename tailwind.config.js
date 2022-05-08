module.exports = {
  darkMode: "media",
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      logo: "Candal",
    },
    extend: {
      colors: {
        primary: {
          900: "#FE4443",
        },
        secondary: {
          50: "#fcc8cc",
          100: "#fbb9bb",
          200: "#f9a9a9",
          300: "#f799a9",
          400: "#f58686",
          500: "#f37373",
          600: "#f16262",
          700: "#ef5151",
          800: "#ec4141",
          900: "#e93d3d",
        },
        dark: {
          50: "#a9a9a9",
          100: "#999999",
          200: "#909090",
          300: "#7e7e7e",
          400: "#6c6c6c",
          500: "#5a5a5a",
          600: "#484848",
          700: "#363636",
          800: "#242424",
          900: "#121212",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
