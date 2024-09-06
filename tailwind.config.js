/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
  theme: {
    extend: {
      cursor: {
        'pokeball-closed': "url(./static/pokeball-closed.png) 16 16, auto",
        'pokeball-open': "url(./static/pokeball-open.png) 16 16, auto",
      },
      
      colors: {
        "tan1": "E8BF9D",
        "tan2": "F7E0C1",
      },
    },
    
  },
  plugins: [],
}
