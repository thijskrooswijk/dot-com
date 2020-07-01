/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled, { ThemeProvider } from "styled-components"
import theme from "../components/theme"
import { fontFamily } from "styled-system"
import Style from "../styles/global"

const Root = styled.div`
  ${fontFamily}
  color: white;
  background-color: #222;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <ThemeProvider theme={theme}>
        <>
          <Root fontFamily="normal">
            <Style />
            {children}
          </Root>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
