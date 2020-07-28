/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
packageJson = require('./package.json')
path = require('path')

const pageQuery = require('@wheelroom/core').pageQuery
const globalsQuery = require('@wheelroom/core').globalsQuery
const blogQuery = require('@wheelroom/wheel-blog').blogQuery

const dotenv = require('dotenv')

/**
 * Load environment from .env in development mode
 */

if (process.env.NODE_ENV === 'development') {
  const dotEnvResult = dotenv.config()
  if (dotEnvResult.error) {
    throw dotEnvResult.error
  }
}

const cfConfig = {
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
}
// Override env setting here, so that Netlify can build this branch
// cfConfig.environment = 'newModels'

if (!cfConfig.spaceId || !cfConfig.accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Public Sans:300,700'],
        },
      },
    },
    {
      options: cfConfig,
      resolve: 'gatsby-source-contentful',
    },
    {
      options: {
        defaultLocale: 'en-US',
        pageTemplate: path.resolve('./src/page-template/page-template.tsx'),
        queries: [globalsQuery, pageQuery, blogQuery],
      },
      resolve: `gatsby-theme-wheelroom`,
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.thijskrooswijk.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#222222',
        display: 'standalone',
        icon: 'src/favicon.png', // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
        name: 'Thijs Krooswijk',
        short_name: 'thijskrooswijk',
        start_url: '/',
        theme_color: '#222222',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      options: {
        exclude: /(node_modules|.cache|public|@wheelroom\/|)/,
      },
      resolve: 'gatsby-plugin-eslint',
    },
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `schema.gql`,
        // When updating the schema, make sure all models have content and all
        // fields have a value.
        update: false,
      },
    },
  ],
  siteMetadata: {
    siteVersion: packageJson.version,
    siteUrl: 'https://www.thijskrooswijk.com',
    legal: {
      version: packageJson.wheelroom.version,
      description: 'Made with Wheelroom',
      url: 'https://www.wheelroom.io',
    },
    secrets: {
      environment: cfConfig.environment,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      spaceId: cfConfig.spaceId,
    },
  },
}
