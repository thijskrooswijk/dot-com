import { graphql, useStaticQuery } from 'gatsby'
import { contentModel } from '../data/content'
import { StyleObject } from '../lib/css-types'
import { Heading } from './heading'
import { Link } from './link'

const headingStyle: StyleObject = {
  color: 'silver',
  fontWeight: 600,
  lineHeight: 1.25,
}

interface HeaderProps {
  model: contentModel['header']
}

export const Header = ({ model }: HeaderProps) => {
  const header = model
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
    <header>
      <Heading>
        <Link to="/">{site.siteMetadata.title}</Link>
      </Heading>
      <Heading is="h2" css={headingStyle} children={header} />
    </header>
  )
}
