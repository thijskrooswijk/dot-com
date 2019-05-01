import React from "react"
import PropTypes from "prop-types"

import Heading from "./heading"
import Box from "./box"
import Link from "./link"
import { graphql, useStaticQuery } from "gatsby"

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
      <Heading is="h2" color={"silver"}>
        Full Stack developer. Coding with C++, Python, Javascript and HTML/CSS.
        Working @<a href="https://www.naivi.nl/">Naivi</a> and @
        <a href="https://www.napframework.com/">NAP</a>
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
