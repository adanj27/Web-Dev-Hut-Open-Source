/** @type {import('tailwindcss').Config} */
/* eslint-disable-next-line no-undef */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'footer-wave': 'url("/img/footer-wave.svg")',
        'hero-bg': 'url("/img/hero-bg.svg")',
      },
    },
    fontFamily: {
      body: ['"Roboto"', 'system-ui', '-apple-system', 'sans-serif'],
    },
    screens: {
      sm: '565px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& *')
      addVariant('child-hover', '& *:hover')
      addVariant('direct-child', '& > *')
      addVariant('direct-child-hover', '& > *:hover')
    },
  ],
}
