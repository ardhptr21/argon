import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1598C9',
          light: '#E0F3F8',
          deep: '#258DB5',
          dark: '#006996',
        },
        secondary: {
          DEFAULT: '#009678',
          light: '#B2DFD4',

          deep: '#00795D',
          dark: '#004D34',
        },
        tertiary: {
          DEFAULT: '#533BBB',
          light: '#CDC3EA',

          deep: '#392FAC',
          dark: '#001E96',
        },
        blue: {
          light: '#E8F2FF',
        },
        background: '#F7F9FF',
      },
    },
  },
  plugins: [],
};
export default config;
