/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08082b',
        inkSoft: '#212158',
        mist: '#f5f5f5',
        graySoft: '#d6d6d6',
        grayPage: '#dddddd',
        green: '#2aae3d',
        red: '#ec1c23',
      },
      fontFamily: {
        body: ['"DM Sans"', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      maxWidth: { content: '1140px' },
      borderRadius: { pill: '100px' },
      boxShadow: {
        soft: 'rgba(0, 0, 0, 0.15) 1px 2px 15px 0px',
      },
    },
  },
  plugins: [],
}
