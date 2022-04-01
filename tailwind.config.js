const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#030303",
        medium: "#1A1A1B",
        light: "#272729",
        "gray-light": colors.slate[300],
        "gray-medium": colors.slate[500],
        "gray-dark": colors.slate[700]
      }
    }
  },
  plugins: []
}
