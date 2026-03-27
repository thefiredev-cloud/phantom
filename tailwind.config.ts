import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { accent: '#7c3aed' },
      fontFamily: { inter: ['var(--font-inter)'] },
    },
  },
  plugins: [],
}
export default config
