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
          color: '#DEA5A3',
          a: {
            color: '#DEA5A3',
            textDecoration: 'none',
            '&:hover': {
              color: '#EAD5D4',
            },
          },
          ul: {
            marginLeft: '0.6rem',
          },
          'ul > li': {
            position: 'relative',
            lineHeight: '1.4',
          },
          'ul > li::before': {
            content: '""',
            position: 'absolute',
            backgroundColor: '#DEA5A3',
            borderRadius: '50%',
          },
          h1: {
            color: '#DEA5A3',
            fontWeight: '400',
          },
          h2: {
            color: '#DEA5A3',
            fontWeight: '400',
          },
          h3: {
            color: '#DEA5A3',
            fontWeight: '400',
          },
          h4: {
            color: '#DEA5A3',
            fontWeight: '400',
          },
          blockquote: {
            color: '#DEA5A3',
            borderLeftColor: '#937A8B',
          },
          hr: {
            borderColor: 'rgba(232, 162, 161, 0.5)',
          },
          th: {
            color: '#DEA5A3',
            fontWeight: '700',
          },
          thead: {
            borderBottomColor: 'rgba(232, 162, 161, 0.5)',
          },
        },
      },
    },
    extend: {
      colors: {
        'black-russian': '#23212D',
        martinique: '#3A3747',
        'mountbatten-pink': '#937A8B',
        'pale-chestnut': '#DEA5A3',
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
