/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inherit: 'inherit'
      },
      transitionTimingFunction: {
        expend: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
      },
      transitionProperty: {
        expend: 'width, left',
        color: 'color'
      }
    }
  },
  plugins: []
};
