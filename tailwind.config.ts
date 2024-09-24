import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#964B00',
        secondary: '#DBA765',
      },
      backgroundImage: {
        'gradient-text-primary': 'linear-gradient(to right, #964B00 0%, #301800 100%)',
      },
    },
  },
  plugins: [],
}
export default config
