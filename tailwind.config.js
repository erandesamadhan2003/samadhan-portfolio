/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F0F0F',
        surface: '#1C1C1C',
        orange: '#FF7A00',
        amber: '#FFB347',
        silver: '#C0C0C0',
        cream: '#EAE4D5',
        frost: '#F5F5F5',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
