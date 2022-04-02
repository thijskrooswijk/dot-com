import { StyleObject } from '../lib/css-types'
import { GetTypesOf } from '../lib/get-types-of'

const textStyle: StyleObject = {
  color: `var(--text-color)`,
  lineHeight: 1.45,
  fontWeight: 300,
  fontFeatureSettings: `'kern' 1, 'ss03' 1`,
}

export const Text = (props: GetTypesOf['p']) => <p css={textStyle} {...props} />
