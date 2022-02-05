import { StyleObject } from '../lib/css-types'
import { GetTypesOf } from '../lib/get-types-of'

const textStyle: StyleObject = {
  fontSize: 18,
  lineHeight: 1.45,
}

export const Text = (props: GetTypesOf['p']) => <p css={textStyle} {...props} />
