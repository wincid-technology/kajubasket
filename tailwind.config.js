/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        regular: ['mosafin-regular'],
        semibold: ['mosafin-semibold', 'sans-serif'],
        bold: ['mosafin-bold', 'sans-serif'],
        black: ['mosafin-black', 'sans-serif'],
      },
      screens: {
        'sm-plus': '600px', // Custom breakpoint for 440px
        'xs': '415px', // Custom breakpoint for 440px
        'xmd': '840px', // Custom breakpoint for 440px
        'lg': '1025px', // Custom breakpoint for 440px
        'xlg': '1200px', // Custom breakpoint for 440px
        'xxl': '1560px', // Custom breakpoint for 440px
      },
    },
  },
  plugins: [],
  safelist: [
    'scrollbar-hide' // Optional if you are using it dynamically
  ],
};
