module.exports = {
  siteMetadata: {
    title: `Sheila Leon`,
    description: `Website, Portfolio & Digital Garden of the Front-end Developer Sheila Leon`,
    author: {
      name: `Sheila Leon`,
      summary: `She/her, Front-end Developer, Critter, Los Doyers Fan & Sim Racing Hobbyist 🏳️‍🌈`,
    },
    siteUrl: `https://sheilaleon.tech`,
    image: `/sheilaleon.png`,
    twitterUsername: `@kan`,
    social: {
      twitter: `kan`,
    },
    navigationLinks: [
      {
        label: `About`,
        link: `/about/`,
      },
      {
        label: `Garden`,
        link: `/the-garden/`,
      },
      {
        label: `Now`,
        link: `/now/`,
      },
      {
        label: `Uses`,
        link: `/uses/`,
      },
    ],
    socialLinks: [
      {
        label: `GitHub`,
        link: `https://github.com/sheilaleon`,
        icon: `github`,
      },
      {
        label: `Twitter`,
        link: `https://twitter.com/kan`,
        icon: `twitter-alt`,
      },
      {
        label: `LinkedIn`,
        link: `https://linkedin.com/in/sheilaleon`,
        icon: `linkedin`,
      },
      {
        label: `Instagram`,
        link: `https://instagram.com/sheilaleon_`,
        icon: `instagram`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/the-garden`,
        name: `garden`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/about`,
        name: `about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/uses`,
        name: `uses`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/now`,
        name: `now`,
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
          `gatsby-transformer-json`,
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
        domain: process.env.SIMPLE_ANALYTICS_DOMAIN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SheilaLeon.tech`,
        short_name: `Sheila Leon`,
        start_url: `/`,
        background_color: `#1a202c`,
        theme_color: `#16db65`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.svg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-svg`,
  ],
};
