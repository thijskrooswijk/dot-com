import * as React from "react"
import { Heading } from "./heading"
import { Link } from "./link"

export const Header: React.FC<JSX.IntrinsicElements["header"]> = ({
  children,
  ...props
}) => {
  return (
    <header role="banner" {...props}>
      <Heading>
        <Link to="/">{children}</Link>
      </Heading>
    </header>
  )
}
