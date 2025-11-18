/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#2436E8',
        fsa: {
          'teal': {
            50: '#e6f7f7',
            100: '#b3e8e8',
            200: '#80d9d9',
            300: '#4dcaca',
            400: '#1ababa',
            500: '#00a6a6', // Primary FSA teal
            600: '#008a8a',
            700: '#006d6d',
            800: '#005050',
            900: '#003434',
          },
          'blue': {
            50: '#e6f0ff',
            100: '#b3d1ff',
            200: '#80b3ff',
            300: '#4d94ff',
            400: '#1a75ff',
            500: '#0055cc', // Primary FSA blue
            600: '#0047ad',
            700: '#00398d',
            800: '#002b6e',
            900: '#001d4e',
          },
          'navy': {
            50: '#e6e9f0',
            100: '#b3bdd4',
            200: '#8091b8',
            300: '#4d659c',
            400: '#1a3980',
            500: '#002855', // Deep navy
            600: '#002047',
            700: '#001839',
            800: '#00102b',
            900: '#00081d',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
