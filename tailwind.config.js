/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080c14',
          900: '#0d1321',
          800: '#111827',
          700: '#1a2235',
          600: '#1e293b',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        magenta: {
          400: '#e879f9',
          500: '#d946ef',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
