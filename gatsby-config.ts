

import type { GatsbyConfig } from "gatsby"
import * as dotenv from "dotenv"

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.thijskrooswijk.com`,
    title: `Thijs Krooswijk`,
    description: `Freelance and Open-source developer. Love coding with React, TypeScript and HTML/CSS. Contributing to Knappsack. Working at Monné on a Healthcare App.`,
    author: `@thijskrooswijk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.thijskrooswijk.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [ process.env.GATSBY_GOOGLE_GTAG_ID ]
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
        name: `Thijs Krooswijk`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#222222`,
        display: `minimal-ui`,
        icon: `src/images/angular.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

export default config
