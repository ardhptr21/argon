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
          50: '#E0F3F8',
          500: '#1598C9',
          800: '#258DB5',
          900: '#006996',
        },
        secondary: {
          DEFAULT: '#009678',
          50: '#B2DFD4',
          500: '#009678',
          800: '#00795D',
          900: '#004D34',
        },
        tertiary: {
          DEFAULT: '#533BBB',
          50: '#CDC3EA',
          500: '#533BBB',
          800: '#392FAC',
          900: '#001E96',
        },
      },
    },
  },
  plugins: [],
};
export default config;
