import { StyleObject } from "../lib/css-types"
import { GetTypesOf } from "../lib/get-types-of"
import { Any } from "../lib/react-create-any-element"

const headingStyle: StyleObject = {
  color: `var(--text-color)`,
  fontWeight: 600,
  fontFeatureSettings: `'kern' 1, 'ss03' 1`,
}

export const Heading: React.FC<GetTypesOf["h1"]> = props => (
  <Any is="h1" css={headingStyle} {...props}>
    {props.children}
  </Any>
)
