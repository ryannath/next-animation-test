import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        popIn: {
          '0%': { transform: 'scale(80%)', opacity: '0%' },
          '75%': { transform: 'scale(105%)', opacity: '100%'},
          '100%': { transform: 'scale(100%)', opacity: '100%' },
        },
        popOut: {
          'from': { transform: 'scale(100%)', opacity: '100%' },
          '40%': { transform: 'scale(110%)', opacity: '100%' },
          'to': {transform: 'scale(80%)', opacity: '0%'}
        }
      },
    },
  },
  plugins: [],
};
export default config;
