import { css } from '@emotion/css'
import { Link as GatsbyLink } from 'gatsby'
import { StyleObject } from '../lib/css-types'

const gatsbyLinkStyle: StyleObject = {
  color: '#00E2B1',
  ':hover, :active, :focus': {
    color: '#00E2B1',
    textDecoration: 'underline',
  },
}

export const Link = (props: any) => (
  <GatsbyLink className={css(gatsbyLinkStyle)} {...props} />
)
