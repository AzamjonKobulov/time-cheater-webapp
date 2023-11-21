/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        600: "600px",
      },
      screens: {
        "3xl": "107.5rem",
      },
      colors: {
        brand: {
          wind: "#4BC2C2",
          "wind-light": "#8BE8E8",
          title: "#2B2E67",
          record: "#484AAB",
          purple: {
            light: "#EBECFF",
            100: "#6367D0",
            200: "#767BFF",
          },
          gray: "#747A97",
          "dark-blue": "#1C1A4F",
        },
      },
      fontFamily: {
        "cera-pro": ["Cera Pro", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/public/assets/images/img-sidebar.png')",
      },
      boxShadow: {
        base: "0px 5px 15px 0px #DCDCF5;",
        inner: "2px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
        slider: "0 0 2px 0 rgb(0 0 0 / 44%)",
      },
    },
  },
  plugins: [],
};
