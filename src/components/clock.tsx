import { StyleObject } from '../lib/css-types'
import { mq } from '../theme/mq'
import { Box } from './box'
import { ClockEven } from './clock-even'
import { ClockOdd } from './clock-odd'

const clockStyle = mq({
  gridColumn: ['1 / 3', '2 / 3'],
  margin: 'auto',
  maxWidth: 720,
  padding: 24,
  width: '100%',
} as StyleObject)

const groupStyle: StyleObject = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(25%, 1fr))',
}

export const Clock = () => (
  <Box css={clockStyle}>
    <Box
      css={groupStyle}
      role="group"
    >
      <ClockOdd />
      <ClockEven />
      <ClockOdd />
      <ClockEven />
    </Box>
  </Box>
)
