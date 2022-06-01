module.exports = {
  content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        extraLarge: '8rem'
      }
    },
  },
  plugins: [
    // require("daisyui")
],
}
