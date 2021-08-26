import { css } from '@emotion/css'
import { A } from '@wheelroom/any/react'
import { Link as GatsbyLink } from "gatsby"
import { StyleObject } from '../lib/css-types'

const linkStyle: StyleObject = {
  color: '#00E2B1',
  ':hover, :active, :focus, :visited': {
    color: '#00E2B1',
  },
}

interface LinkProps {
  children: React.ReactNode
  title?: string
  to: string
}

export const Link = ({ children, to, ...props }: LinkProps) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink className={css(linkStyle)} to={to} {...props}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <A href={to} css={linkStyle} {...props}>
      {children}
    </A>
  )
}
