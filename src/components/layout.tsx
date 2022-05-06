import { graphql, StaticQuery } from "gatsby"
import { Global } from "@emotion/react"
import { globalStyle } from "../theme/global"
import { globalReset } from "../theme/global-reset"

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
    render={data => (
      <>
        <Global styles={[globalReset, globalStyle]} />
        {children}
      </>
    )}
  />
)
