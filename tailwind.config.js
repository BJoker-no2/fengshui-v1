/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 中国传统五行色彩
        wood: '#1D7874',     // 青色（木）
        fire: '#C7243A',     // 赤色（火）
        earth: '#F4C300',    // 黄色（土）
        metal: '#F2F4F3',    // 白色（金）
        water: '#0F172A',    // 黑色（水）
        // 辅助色
        primary: '#1D7874',
        secondary: '#C7243A',
        neutral: '#F2F4F3',
        dark: '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
      },
    },
  },
  plugins: [],
}