import { Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { globalStyle } from '../theme/global'

export const Layout = ({ children }) => (
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
      <>
        <Global styles={[globalReset, globalStyle]} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
