import { GetTypesOf } from '../lib/get-types-of'
import { AnyElement } from '../lib/react-create-any-element'

export const Section = (props: GetTypesOf['section']) => (
  <AnyElement is="section" {...props} />
)

export const Img = (props: GetTypesOf['img']) => (
  <AnyElement is="img" {...props} />
)

export const Ol = (props: GetTypesOf['ol']) => <AnyElement is="ol" {...props} />

export const Ul = (props: GetTypesOf['ul']) => <AnyElement is="ul" {...props} />

export const Li = (props: GetTypesOf['li']) => <AnyElement is="li" {...props} />

export const A = (props: GetTypesOf['a']) => <AnyElement is="a" {...props} />
