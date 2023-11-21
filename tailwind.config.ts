import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ['Fuggles']
      },
      colors: {
        mainColor: "#FFD700",
        lime: "#08FB00",
      },
      screens: {
        'landscape-sm': { 'raw': '(max-width: 800px) and (orientation: landscape)' },
      },
      width: {
        'personalize-div': 'clamp(300px, 30vw, 400px)',
      },
    },
  },
  plugins: [],
}
export default config