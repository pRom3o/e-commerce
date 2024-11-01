/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        customRed: '#c80815',
        customBlue: '#0000ff',
        customZinc: '#e9ecef',
        'custom-zinc-2': '#f8f9fa',
        'custom-blue': '#1d4ed8',
      },
      fontFamily: {
        // Add your custom font here
        'playwrite-NL': ['"Playwrite NL"', 'cursive'],
        sans: ['Raleway', 'sans-serif'],
      },
      height: {
        hero: '70vh',
        mid: '60vh',
        side: '50vh',
        land: '80vh',
        flash: '25vh',
      },
      width: {
        midW: '95vw',
      },
    },
  },
  plugins: [],
};
