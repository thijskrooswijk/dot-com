import { css } from "@emotion/css"
import { Link as GatsbyLink } from "gatsby"
import { StyleObject } from "../lib/css-types"
import { A } from "./elements"

const linkStyle: StyleObject = {
  color: `var(--link-color)`,
  ":hover, :active, :focus, :visited": {
    color: `var(--link-color)`,
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
