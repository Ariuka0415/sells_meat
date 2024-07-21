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
    },
  },
  plugins: [],
}

