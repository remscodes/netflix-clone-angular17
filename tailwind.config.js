/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        accent: 'var(--accent-color)',
        warn: 'var(--warn-color)',
        'transparent-black': 'rgba(0,0,0,.75)'
      }
    },
  },
  plugins: [],
}

