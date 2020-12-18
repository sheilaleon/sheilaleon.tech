module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        current: 'currentColor',
        background: 'var(--colour-bg)',
        default: 'var(--colour-default)',
        defaultHover: 'var(--colour-default-hover)',
        heading: 'var(--colour-heading)',
        link: 'var(--colour-link)',
        linkHover: 'var(--colour-link-hover)',
        primary: 'var(--colour-primary)',
        secondary: 'var(--colour-secondary)',
        accent: 'var(--colour-accent)',
        accentHover: 'var(--colour-accent-hover)',
        muted: 'var(--colour-muted)',
        mutedHover: 'var(--colour-muted-hover)',
      },
      borderColor: (theme) => ({
        default: 'var(--colour-border)',
        hover: 'var(--colour-border-hover)',
        ...theme('colors'),
      }),
      outline: {
        custom: ['2px solid var(--colour-logo)', '5px'],
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
};
