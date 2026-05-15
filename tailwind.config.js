/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a',
          light: '#22c55e',
          dark: '#15803d',
          glow: 'rgba(34, 197, 94, 0.3)',
          'glow-soft': 'rgba(34, 197, 94, 0.08)',
        },
        surface: {
          DEFAULT: '#ffffff',
          glass: 'rgba(255, 255, 255, 0.6)',
          'glass-border': 'rgba(255, 255, 255, 0.3)',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          600: '#525252',
          400: '#a3a3a3',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50: '#fafafa',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
