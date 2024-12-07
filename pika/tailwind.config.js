// module.exports = {
//   mode: 'jit', // Just-In-Time compilation
//   purge: ['./src/**/*.{js,jsx,ts,tsx}'], // Scan React components for classes
//   theme: {
//     extend: {},
//   },
//   variants: {},
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: "#f15b34",
      }
    },
  },
  plugins: [],
};