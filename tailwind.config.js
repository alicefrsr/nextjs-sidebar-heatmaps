const { redirect } = require('next/dist/server/api-utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        dm: 'DM Mono, monospace',
        fira: 'Fira Code, monospace',
        atk: 'Atkinson_Hyperlegible, sans-serif',
        ibm: 'IBM Plex Mono, monospace',
        sketch: 'Londrina Sketch, sans-serif',
      },
      colors: {
        primaryLight: '#483bdb',
        greyLight: '#6c7281',
        greyDark: '#343a40',
      },
    },
  },
  plugins: [],
};
