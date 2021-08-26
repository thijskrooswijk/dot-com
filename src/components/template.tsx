import { AnyProps, Div } from '@wheelroom/any/react'
import { StyleObject } from '../lib/css-types'

const templateStyle: StyleObject = {
  width: '100%',
  margin: 'auto',
  maxWidth: 1440,
}

export const Template = (props: AnyProps['div']) => <Div css={templateStyle} {...props} />
