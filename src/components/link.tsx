import { css } from '@emotion/css'
import { Link as GatsbyLink } from 'gatsby'

const gatsbyLinkStyle = {
  color: 'gray',
  textDecoration: 'none',
  ':hover, :active, :focus': {
    textDecoration: 'underline',
  },
}

export const Link = (props: any) => (
  <GatsbyLink className={css(gatsbyLinkStyle)} {...props} />
)
