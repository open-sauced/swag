const { colors: { red, yellow, blue, orange } } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        background: "#fffbf5",
        offwhite: "#fbfbfb",
        accent: "#faeace",

        gold: "#f6bc00",

        greenblue: {
          light: "#00c7b7",
          dark: "#03b1a3",
        },

        red: {
          ...red,
          base: "#fb6d77",
          dark: "#fa3946",
          saucy: "#d95c41",
        },

        yellow: {
          ...yellow,
          cheesy: "#f6d809",
        },

        grey: {
          100: "#fafafa",
          200: "#f2f2f2",
          300: "#e6e6e6",
          400: "#bcbcbc",
          500: "#8b8b8b",
          600: "#2F372E",
          700: "#313d3e",
          800: "#171c1d",
          900: "#0c0e0e",
        },

        blue: {
          ...blue,
          base: "#4d9abf",
        },

        orange: {
          ...orange,
          450: "#fe9d68",
        }
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
