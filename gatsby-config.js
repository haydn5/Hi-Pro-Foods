module.exports = {
  siteMetadata: {
    title: `Hi Pro Foods`,
    description: `Hi Pro Foods supplies and trades turkey and poultry products for domestic customers and for export around the world. We work with end users, retailers, further processors, distributors and export partners.`,
    author: `Hi Pro Foods`,
  },
  plugins: [
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
        name: `Hi Pro Foods`,
        short_name: `Hi Pro Foods`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hi-pro-logo-no-white-square.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
