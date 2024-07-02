import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'turquoise': {
        600: '#3AB8B4',
        500: '#3DC2BE',
      },
      'white': '#ffffff',
      'gray': {
        300: '#d1d5db',
        400: '#9ca3af',
        900: '#111827',
      },
      'green': {
        600: '#019C3E',
        500: '#01B246',
      },
      'yellow': {
        600: '#FFCC1A',
        500: '#F9C200',
      },
      'red': {
        600: '#FA3D4F',
        500: '#E33748',
      },
    },
  },
  plugins: [],
};
export default config;
