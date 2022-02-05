import { GetTypesOf } from '../lib/get-types-of'
import { AnyElement } from '../lib/react-create-any-element'

export const Heading = (props: GetTypesOf['h1']) => (
  <AnyElement is="h1" {...props} />
)
