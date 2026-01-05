import baseConfig from '@extension/tailwindcss-config';
import type { Config } from 'tailwindcss/types/config';
import typography from '@tailwindcss/typography';

export default {
  ...baseConfig,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        progress: 'progress 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [...(baseConfig.plugins || []), typography],
} as Config;
