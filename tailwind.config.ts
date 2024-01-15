import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      primary: "#F67172",
      secondary: "#FCB973",
      gray:'#FCFCFF',
      linkColor : '#000FFF',
      light:"#ffffff",
      darkGray:'rgb(156 163 175)',
      lite_gray:"#eeeeee",
     text_dark : '#11172D',
      transparent:'transparent',
      slate : '#7B808E',
      dodgerBlue: '#1E90FF',
    }
  },
  plugins: [],
}
export default config