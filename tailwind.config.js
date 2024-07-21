/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '800px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      boxShadow: {
        'boxShadow': '0 1px 3px -2px black',
      },
      border: {
        'border': '1px solid #7a7a7a'
      },
      gridTemplateColumns: {
        'custom': '1fr 1.5fr 1fr 1fr 1fr 1fr',
      },
      rotate: {
        '90': '90deg',
      },
      scale: {
        '80': '0.8',
      },
      transitionProperty: {
        'rotate': 'transform',
        'scale': 'transform',
      },
      transitionDuration: {
        'slow': '500ms',
      },
    },
  },
  plugins: [],
}

