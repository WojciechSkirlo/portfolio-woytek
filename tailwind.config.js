module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "accent": {
          dark: "#3dc1d3",
          DEFAULT: "#3dc1d3"
        },
        grey: {
          DEFAULT: "",
        }
      },
      fontSize: {
        base: ['15px', '18px'],
        lg: ['17px'],
        '5xl': ['2.5rem']
      }
    },
  },
  plugins: [],
}