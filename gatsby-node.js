/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: '/admin',
    component: path.resolve('src/admin-resources/admin-panel.jsx'),
    context: {},
  })
}
