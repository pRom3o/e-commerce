/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        customRed: '#c80815',
        customBlue: '#0000ff',
        customZinc: '#f5f4f4',
      },
    },
  },
  plugins: [],
};
