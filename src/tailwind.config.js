/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0b1220',
        lilac: '#d7c9ff',
        indigo: '#6e5de7',
        teal: '#48e5c2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 50px rgba(78, 67, 255, 0.35)',
      },
    },
  },
  plugins: [],
};
