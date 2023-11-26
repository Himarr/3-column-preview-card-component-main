/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        deca: "Lexend Deca, sans-serif",
        bigshoulders: "Big Shoulders Display, sans-serif"
      },
      colors: {
        brightorange: "hsl(31, 77%, 52%)",
        darkcyan: "hsl(184, 100%, 22%)",
        verydarkcyan: "hsl(179, 100%, 13%)",
        transparentwhite: "hsla(0, 0%, 100%, 0.75)",
        verylightgray: "hsl(0, 0%, 95%)"
      }
    },
  },
  plugins: [],
}

