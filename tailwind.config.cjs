// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      'main': '#000014',
      'accent': '#0000ff',
      'semantic': '#FF8000',
      'background': '#FDFDFF',
      'darkaccent': '#0000A3',
    },

    extend: {
      fontFamily: {
        'sans': ['TeX Gyre Heros Cn'],
        'body': ['TeX Gyre Heros'],
        'detail': ['Escolar4'],
        'detailed': ['Escolar1']
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}