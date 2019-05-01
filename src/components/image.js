import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ image, rotation }) => (
  <StaticQuery
    query={graphql`
      query {
        right: file(relativePath: { eq: "angular-right.png" }) {
          childImageSharp {
            fluid(maxWidth: 512, maxHeight: 512, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        left: file(relativePath: { eq: "angular-left.png" }) {
          childImageSharp {
            fluid(maxWidth: 512, maxHeight: 512, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        rightNegative: file(
          relativePath: { eq: "angular-right-negative.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 512, maxHeight: 512, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        leftNegative: file(relativePath: { eq: "angular-left-negative.png" }) {
          childImageSharp {
            fluid(maxWidth: 512, maxHeight: 512, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      let fileName
      if (image === "right") {
        fileName = data.right.childImageSharp.fluid
      } else if (image === "rightNegative") {
        fileName = data.rightNegative.childImageSharp.fluid
      } else if (image === "leftNegative") {
        fileName = data.leftNegative.childImageSharp.fluid
      } else {
        fileName = data.left.childImageSharp.fluid
      }

      return <Img fluid={fileName} className={rotation} />
    }}
  />
)
export default Image
