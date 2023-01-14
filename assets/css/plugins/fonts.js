const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addBase }) {
  const fontFaces = {
    '@font-face': [
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        src: 'url("./assets/fonts/inter/normal.woff2") format("woff2")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'italic',
        src: 'url("./assets/fonts/inter/italic.woff2") format("woff2")'
      },
      {
        fontFamily: 'YouTube Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        src: 'url("./assets/fonts/youtube-sans/bold.otf") format("opentype")'
      },
      {
        fontFamily: 'Consolas',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'url("./assets/fonts/consolas/regular.ttf") format("truetype")'
      }
    ]
  };

  addBase(fontFaces);
},
{
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'youtube-sans': ['YouTube Sans', 'sans-serif'],
        'consolas': ['Consolas', 'sans-serif']
      }
    }
  }
})
