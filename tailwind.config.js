module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      serif: [
        'Lora',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
    typography: {
      default: {
        css: {
          color: 'text-pale-chestnut',
          a: {
            color: 'text-pale-chestnut',
            '&:hover': {
              color: 'text-fantasy',
            },
          },
          'ul > li': {
            position: 'relative',
          },
          'ul > li::before': {
            content: '""',
            position: 'absolute',
            backgroundColor: '#dea5a3',
            borderRadius: '50%',
          },
          h1: {
            color: 'text-mountbatten-pink',
            fontWeight: '400',
          },
          h2: {
            color: 'text-mountbatten-pink',
            fontWeight: '400',
          },
          h3: {
            color: 'text-mountbatten-pink',
            fontWeight: '400',
          },
          h4: {
            color: 'text-mountbatten-pink',
            fontWeight: '400',
          },
          p: {
            fontSize: '1rem',
          },
        },
      },
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
      boxShadow: {
        outline: '0 0 0 2px rgba(234, 213, 212, 0.80)',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
