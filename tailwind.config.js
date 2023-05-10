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
<<<<<<< HEAD
    fontFamily: {
      body: ['"Roboto"', 'system-ui', '-apple-system', 'sans-serif'],
    },
=======
>>>>>>> 6d25eff4411dfc12bca9aad691c6eba5d875cf47
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
