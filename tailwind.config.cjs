/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
  safelist: [
    'bg-white',
    'text-blue-800',
    'dark:bg-blue-900',
    'dark:text-blue-300',
  ],
};
