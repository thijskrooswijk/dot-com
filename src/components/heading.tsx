import { StyleObject } from '../lib/css-types'
import { GetTypesOf } from '../lib/get-types-of'
import { AnyElement } from '../lib/react-create-any-element'

const headingStyle: StyleObject = {
  color: 'white',
  fontWeight: 600,
}

export const Heading = (props: GetTypesOf['h1']) => (
  <AnyElement is="h1" css={headingStyle} {...props} />
)
