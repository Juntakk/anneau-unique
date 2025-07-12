import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,css}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['var(--font-medieval)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
