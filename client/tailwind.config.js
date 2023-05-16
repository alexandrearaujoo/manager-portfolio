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
      },
      animation: {
        'slide-right':
          'slide-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-left':
          'slide-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'skeleton-body': 'shimmer 5s infinite linear'
      },
      keyframes: {
        'slide-right': {
          '0%': {
            transform: 'translateX(-520px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(520px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'fade-in': {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        shimmer: {
          '0%': {
            mask: 'linear-gradient(-60deg,#000 30%,#0009,#000 70%) right/600% 100%'
          },
          '100%': {
            mask: 'linear-gradient(-60deg,#000 30%,#0009,#000 70%) left/600% 100%'
          }
        }
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%)',
        'bg-global': 'linear-gradient(90deg, rgba(255,255,255,1) 31%, rgba(82,82,91,1) 75%)'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(20rem, 1fr))'
      }
    }
  },
  plugins: []
};
