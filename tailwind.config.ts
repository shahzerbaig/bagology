import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        ink: '#16241B',
        forest: '#0F5D3A',
        leaf: '#2E7D32',
        lime: '#9BC53D',
        kraft: '#C9B79C',
        kraftline: '#E9E1D2',
        kraftdeep: '#8C7A5C',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
