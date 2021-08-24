import { graphql, StaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

interface ImageProps {
  image: string
  rotation: string
}

export const Image = ({ image, rotation }: ImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        right: file(relativePath: { eq: "angular-right.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: CONSTRAINED
              formats: WEBP
            )
          }
        }
        left: file(relativePath: { eq: "angular-left.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: CONSTRAINED
              formats: WEBP
            )
          }
        }
        rightNegative: file(
          relativePath: { eq: "angular-right-negative.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: CONSTRAINED
              formats: WEBP
            )
          }
        }
        leftNegative: file(relativePath: { eq: "angular-left-negative.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: CONSTRAINED
              formats: WEBP
            )
          }
        }
      }
    `}
    render={(data) => {
      let fileName: any
      if (image === 'right') {
        fileName = data.right.childImageSharp.gatsbyImageData
      } else if (image === 'rightNegative') {
        fileName = data.rightNegative.childImageSharp.gatsbyImageData
      } else if (image === 'leftNegative') {
        fileName = data.leftNegative.childImageSharp.gatsbyImageData
      } else {
        fileName = data.left.childImageSharp.gatsbyImageData
      }

      return (
        <GatsbyImage
          image={fileName}
          className={rotation}
          alt={`Rotate ` + rotation}
        />
      )
    }}
  />
)
