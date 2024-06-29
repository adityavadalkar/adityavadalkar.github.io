/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'off-white': '#FFF6EB',
        'dull': "#AC9C8D",
        'barbie': "#DEA6B1",
        'olive-green': '#647973',
        'green-blue': '#314247',
        'charcoal': '#1A1F16'
      },
      backgroundImage: {
        'notebook': "url('/notebook.webp')",
      },
      fontFamily: {
        'handwritten': ["'Montserrat'", 'sans-serif'],
        'game-text': ["'Press Start 2P'", 'system-ui'],
        'anime-text': ['"Permanent Marker"', 'sans-serif']
      },
      animation: {
        marquee: 'marquee 75s linear infinite',
        marquee2: 'marquee2 75s linear infinite',
        'marquee-reverse': 'marquee-reverse 75s linear infinite',
        'marquee2-reverse': 'marquee2-reverse 75s linear infinite',
        'marquee-vertical': 'marquee-vertical 90s linear infinite',
        'marquee2-vertical': 'marquee2-vertical 90s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'marquee2-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'marquee2-vertical': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
  plugins: [],
};
