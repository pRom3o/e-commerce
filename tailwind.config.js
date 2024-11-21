/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        customRed: '#c80815',
        customBlue: '#0000ff',
        'custom-blue-2': '#0466c8',
        customZinc: '#e9ecef',
        'custom-zinc-2': '#f8f9fa',
        'custom-blue': '#1d4ed8',
        svg: '#bbdefb',
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
        blog: '35vh',
        land: '80vh',
        flash: '25vh',
        contact: '95vh',
        h: '1px',
      },
      width: {
        midW: '95vw',
        blog: '85vw',
        inner: '80vw',
        login: '60vw',
        signup: '30vw',
      },
      backgroundImage: {
        'custom-bg': "url('@/assets/bag1.jpg')",
        'custom-bg-2': "url('@/assets/Business Card.png')",
      },
    },
  },
  plugins: [],
};
