import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#003366',
        'charcoal': '#333333',
        'graphite': '#555555',
        'blue': {
          600: '#1E3A8A',
          700: '#1E40AF',
        },
        'red': {
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
