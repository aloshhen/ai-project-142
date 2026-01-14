export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cosmic: {
          purple: '#8B5CF6',
          dark: '#000000',
        }
      },
    },
  },
  plugins: [],
}