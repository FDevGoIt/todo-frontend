/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'filters-button': 'linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%)',
      },
    },
  },
  plugins: [],
}
