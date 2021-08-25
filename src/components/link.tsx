import { css } from '@emotion/css'
import { Link as GatsbyLink } from 'gatsby'
import { StyleObject } from '../lib/css-types'
import { linkStyle } from '../theme/style'

const gatsbyLinkStyle: StyleObject = {
  ...linkStyle,
  textDecoration: 'none',
  ':hover, :active, :focus': {
    textDecoration: 'underline',
  },
}

export const Link = (props: any) => (
  <GatsbyLink className={css(gatsbyLinkStyle)} {...props} />
)
