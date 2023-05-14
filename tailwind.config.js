/** @type {import('tailwindcss').Config} */
/* eslint-disable-next-line no-undef */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // Configure your color palette here
      white: "#ffffff"
    },
    extend: {
      backgroundImage: {
        'footer-wave': 'url("/img/footer-wave.svg")',
      },
      fontFamily: {
        'Inter':"'Inter', sans-serif"
      },
      fontSize:{
        base: ['1rem',{
          lineHeight: '30px'
        }], //16px seguiendo figma
        lg:['1.25rem',{
          lineHeight: '22px'
        }], //20px
        xl: ['3rem',{
          lineHeight:'40px'
        }], //48px
      },
      fontWeight: {
        thin: '500',
        medium: '600',
        bold:'700'
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
