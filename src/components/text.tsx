import { StyleObject } from '../lib/css-types'
import { GetTypesOf } from '../lib/get-types-of'

const textStyle: StyleObject = {
  color: 'white',
  lineHeight: 1.45,
  fontWeight: 300,
}

export const Text = (props: GetTypesOf['p']) => <p css={textStyle} {...props} />
