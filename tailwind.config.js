module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '5xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '6xl': [
            '0 35px 35px rgba(167, 59, 59, 0.75)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        '7xl': [
          '0 35px 35px rgba(9, 192, 177, 0.75)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
    colors: {
      'main': '#db6353',
      'white': '#ffffff',
      'green': '#09c0b1',
      'pale-white': '#f1f5f3',
      'main-dark': '#8b453e',
      'main-light': '#cd9a94',
      'main-3': '#a73b3b',
      'main-4': '#c08284',
      'main-5': '#deb4a4'
    }
  },
  plugins: [],
  
}
