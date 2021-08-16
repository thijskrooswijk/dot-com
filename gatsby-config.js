let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.thijskrooswijk.com`,
    title: `Thijs Krooswijk`,
    description: `Open-source developer. Love coding with TypeScript and HTML/CSS. Co-founder and contributing to Wheelroom. Working at Healthtrain on a Healthcare App.`,
    author: `@thijskrooswijk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.thijskrooswijk.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thijs-krooswijk`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#222222`,
        display: `minimal-ui`,
        icon: `src/images/angular-right.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
