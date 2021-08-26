import { AnyProps, P } from "@wheelroom/any/react"
import { StyleObject } from '../lib/css-types'

const textStyle: StyleObject = {
  fontSize: 18,
  lineHeight: 1.45,
}

export const Text = (props: AnyProps['p']) => <P css={textStyle} {...props} />
