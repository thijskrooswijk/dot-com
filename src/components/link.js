import { Link } from "gatsby"

import styled from "styled-components"
import { display, color, space, fontSize, fontWeight } from "styled-system"

export default styled(Link)`
  ${color}
  ${space}
  ${display}
  ${fontSize}
  ${fontWeight}
  text-decoration: none;
  
  &:hover,
  &:active,
  &:focus {
    text-decoration: underline;
  }
`
