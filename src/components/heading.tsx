import { StyleObject } from '../lib/css-types'
import { GetTypesOf } from '../lib/get-types-of'
import { AnyElement } from '../lib/react-create-any-element'

const headingStyle: StyleObject = {
  color: `var(--text-color)`,
  fontWeight: 600,
  fontFeatureSettings: `'kern' 1, 'ss03' 1`,
}

export const Heading = (props: GetTypesOf['h1']) => (
  <AnyElement is="h1" css={headingStyle} {...props} />
)
