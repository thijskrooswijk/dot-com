import React from "react"
import PropTypes from "prop-types"

import Heading from "./heading"
import Box from "./box"
import Link from "./link"
import { graphql, useStaticQuery } from "gatsby"
import { linkStyle } from "../styles/style"

function Header() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Box is="header">
      <Heading is="h1">
        <Link to="/" color="white">
          {site.siteMetadata.title}
        </Link>
      </Heading>
      <Heading is="h2" color="silver" fontWeight="600" lineHeight={1.25}>
        Full Stack developer. Coding with Python, Javascript (TypeScript) and
        HTML/CSS. Working @
        <a css={linkStyle} href="https://www.naivi.nl/">
          Naivi
        </a>{" "}
        on the{" "}
        <a css={linkStyle} href="https://www.napframework.com/">
          NAP Framework
        </a>{" "}
        and developing{" "}
        <a css={linkStyle} href="https://github.com/wheelroom/wheelroom/">
          Wheelroom
        </a>{" "}
        the fastest JAMstack boilerplate for applications.
      </Heading>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
