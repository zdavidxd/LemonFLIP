module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lemon: {
          DEFAULT: process.env.NEXT_PUBLIC_BRAND_COLOR || '#FFD54A'
        }
      }
    }
  },
  plugins: [],
}
