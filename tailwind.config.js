/** @type {import('tailwindcss').Config} */
/* eslint-disable-next-line no-undef */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'footer-wave': 'url("/img/footer-wave.svg")',
      },
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
