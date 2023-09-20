import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
      'main-purple': '#560FED',
      'light-purple':'#AB95DA',
      'dark-purple': '#31057C',
      'dark-grey': '#1A1A1B',
      'text-grey':'#54595F',  
      'body-white': '#f2f2f2',
      }
    },
  },
  plugins: [],
}
export default config
