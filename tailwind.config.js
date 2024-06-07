/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'charcoal': '#2C2A2A',
        charcoalGray: '#4C4C4C',
        charcoalGray2: '#565A6A',
        bordergray: '#BCBCBC',
        'darkCharcoal': '#2F2B2B',
        'white': '#FFFFFF',
        'fireRed': '#D32020',
        'smokeWhite': '#F2F2F2',
        'darkBlue': '#131726',
        'spanishGray': '#9E9E9E',
        'mistyRose': '#FFE5E5',
        'black': '#010101',
        'headerblack': '#0C0C0C',
        'snowpink': '#FEF7F7',
        'lightGray2': '#F7F7F7',
        'lightGray': '#F8F8F8',
        'MediumGray': '#BEBEBE',
        sky: '#3675AF'


      },
      fontFamily: {

        poppins: ['Poppins', 'serif'],
        Manrope: ['Manrope', 'sans-serif'],
        Mulish: ["Mulish", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        OpenSans:["Open Sans", "sans-serif"]
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLR:{
          '0%':{transform:'translateX(-100%)'},
          '100%':{transform:'translateX(0)'},
        }
      },
      animation: {
        spin75: 'spin 0.75s linear 3',
        slideIn: 'slideIn 1s ease-in-out',
        slideInLR:'slideInLR 1s ease-in'
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [
  ],
};
