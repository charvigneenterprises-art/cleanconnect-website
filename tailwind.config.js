/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F6FB',
          100: '#D6EAF8',
          200: '#85C1E9',
          300: '#5DADE2',
          400: '#3498DB',
          500: '#2E86C1',
          600: '#1A5276',
          700: '#154360',
          800: '#102D4A',
          900: '#0B1F33',
        },
        accent: {
          50: '#E8F7F5',
          100: '#D1EEEB',
          200: '#A4DED6',
          300: '#76CFC2',
          400: '#49C0AD',
          500: '#1BB098',
          600: '#148F77',
          700: '#0F6B56',
          800: '#0A4735',
          900: '#052313',
        },
        bg: {
          light: '#FDFEFE',
          secondary: '#D6EAF8',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'premium': '0 20px 40px -10px rgba(26, 82, 118, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
