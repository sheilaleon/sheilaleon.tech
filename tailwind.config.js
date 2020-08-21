module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      serif: ['Lora', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    extend: {
      colors: {
        'black-russian': '#23212d',
        martinique: '#3a3747',
        'mountbatten-pink': '#937a8b',
        'pale-chestnut': '#dea5a3',
        fantasy: '#EAD5D4',
      },
      inset: {
        '4': '4rem',
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  }
}
