module.exports = {
  siteMetadata: {
    title: `Sheila Leon`,
    titleTemplate: `Designer, Frontend Developer, Product Manager, wearer of many hats`,
    author: {
      name: `Sheila L.`,
      summary: `Designer, Frontend Developer, Product Manager, wearer of many hats`,
    },
    description: `Designer, Frontend Developer, Product Manager, wearer of many hats`,
    siteUrl: `https://sheilaleon.tech`,
    image: `/sheilaleon.png`,
    twitterUsername: `@kan`,
    social: {
      twitter: `kan`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: `emoji-icon`,
              // In order to avoid pattern mismatch you can specify
              // an escape character which will be prepended to the
              // actual pattern (e.g. `#:poop:`).
              escapeCharacter: '#', // (default: '')
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-simple-analytics`,
      options: {
        // Optional custom domain
        domain: `sa.sheilaleon.tech`,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://d6aff4bf271b474ebd8d5657435b8964@sentry.io/5169643',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
        attachStacktrace: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SheilaLeon.tech`,
        short_name: `Sheila Leon`,
        start_url: `/`,
        background_color: `#3a3747`,
        theme_color: `#dea5a3`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.svg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
