import { StyleObject } from '../lib/css-types'
import { Box } from './box'
import { ClockEven } from './clock-even'
import { ClockOdd } from './clock-odd'

const clockStyle: StyleObject = {
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(25%, 1fr))',
  maxWidth: 720,
  padding: 24,
  width: '100%',
}

export const Clock = () => (
  <Box css={clockStyle}>
    <ClockOdd />
    <ClockEven />
    <ClockOdd />
    <ClockEven />
  </Box>
)
