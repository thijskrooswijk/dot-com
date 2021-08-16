import { A } from '@wheelroom/any/react'
import { graphql, useStaticQuery } from 'gatsby'
import { linkStyle } from '../theme/style'
import { Heading } from './Heading'
import { Link } from './Link'

export const Header = () => {
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
      <Heading
        is="h2"
        css={{
          color: 'silver',
          fontWeight: 600,
          lineHeight: 1.25,
        }}
      >
        Open-source developer. Love coding with TypeScript and HTML/CSS. Working
        at Healthtrain and developing{' '}
        <A css={linkStyle} href="https://github.com/wheelroom/wheelroom/">
          Wheelroom
        </A>{' '}
        the fastest JAMstack boilerplate for applications.
      </Heading>
    </header>
  )
}
