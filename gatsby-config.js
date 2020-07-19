module.exports = {
  siteMetadata: {
    title: `Johan Mouchet`,
    description: `Front-end developer based in Melbourne, I'm excited about developing creative and intuitive web applications.`,
    author: `@johanmouchet`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Johan Mouchet`,
        short_name: `J/M`,
        start_url: `/`,
        background_color: `#21354f`,
        theme_color: `#21354f`,
        display: `minimal-ui`,
        icon: `src/images/theme/favicons/google-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
