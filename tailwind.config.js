/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        teal: {
          50: '#e6fffa',
          100: '#ccfff3',
          200: '#99ffea',
          300: '#66ffde',
          400: '#33ffd2',
          500: '#00ffc5',
          600: '#00cc9e',
          700: '#008066',
          800: '#004d40',
          900: '#003329',
        },
        coral: {
          100: '#ffefef',
          200: '#ffd4d4',
          300: '#ffbaba',
          400: '#ff9f9f',
          500: '#ff8585',
          600: '#ff6b6b',
          700: '#ff5252',
          800: '#ff3838',
          900: '#ff1f1f',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};