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
          'light': "#e9d5ff",
          DEFAULT: "#d8b4fe"
        },
        grey: {
          DEFAULT: "",
        }
      },
      animation: {
        'bounce-right': 'bounce-right 0.8s infinite',
      },
      keyframes: {
        'bounce-right': {
          '0%, 100%': {
            transform: 'translateX(25%)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
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