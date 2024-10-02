/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#03518F',
      },
      height: {
        'home-banner-height': '800px', // Default height for all screens
      },
      screens: {
        'banner-sm': { 'max': '768px' },
        'banner-large': { 'raw': '(height: 1024px), (min-width: 800px)' },
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(180deg, #182240, #111)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.home-banner-height': {
          height: '800px',
          '@screen banner-sm': { height: '440px',  },
          '@screen banner-large': { height: '650px', },
        },
      });
    },
  ],
}
