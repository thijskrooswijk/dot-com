import { CSSInterpolation } from '@emotion/css'
import { ClassNames, keyframes } from '@emotion/react'
import { graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { StyleObject } from '../lib/css-types'

const rotateRight = keyframes`
  100% { transform: rotate(360deg);
`

const rotateLeft = keyframes`
  100% { transform: rotate(-360deg);
`

const rightStyle: StyleObject = {
  animation: `${rotateRight} linear 8s infinite`,
}

const leftStyle: StyleObject = {
  animation: `${rotateLeft} linear 8s infinite`,
}

interface ImageProps {
  image: string
  reverse?: boolean
  style?: CSSInterpolation
}

export const Image = ({
  style,
  image = 'angular',
  reverse = false,
}: ImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        angular: file(relativePath: { eq: "angular.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
        angularRotate: file(relativePath: { eq: "angular-rotate.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
        flipAngularRotate: file(
          relativePath: { eq: "flip-angular-rotate.png" }
        ) {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
        flipAngular: file(relativePath: { eq: "flip-angular.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
    `}
    render={(data) => {
      let fileName: IGatsbyImageData =
        data.angular.childImageSharp.gatsbyImageData

      if (image === 'angularRotate') {
        fileName = data.angularRotate.childImageSharp.gatsbyImageData
      }
      if (image === 'flipAngularRotate') {
        fileName = data.flipAngularRotate.childImageSharp.gatsbyImageData
      }
      if (image === 'flipAngular') {
        fileName = data.flipAngular.childImageSharp.gatsbyImageData
      }

      return (
        <ClassNames>
          {({ css, cx }) => (
            <GatsbyImage
              image={fileName}
              className={css([reverse ? rightStyle : leftStyle, style])}
              alt={`Rotate ` + reverse}
            />
          )}
        </ClassNames>
      )
    }}
  />
)
