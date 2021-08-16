import { Box } from './Box'
import { Image } from './Image'

export const Clock = () => (
  <Box css={{ margin: 'auto', width: '100%' }}>
    <Box
      css={{
        width: '100%',
        maxWidth: '35em',
        display: 'flex',
        margin: 'auto',
        padding: 6,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <Image image="right" rotation="right" />
      <Image image="left" rotation="left" />
      <Image image="right" rotation="right" />
      <Image image="left" rotation="left" />

      <Image image="rightNegative" rotation="right-negative" />
      <Image image="leftNegative" rotation="left-negative" />
      <Image image="rightNegative" rotation="right-negative" />
      <Image image="leftNegative" rotation="left-negative" />

      <Image image="right" rotation="right" />
      <Image image="left" rotation="left" />
      <Image image="right" rotation="right" />
      <Image image="left" rotation="left" />

      <Image image="rightNegative" rotation="right-negative" />
      <Image image="leftNegative" rotation="left-negative" />
      <Image image="rightNegative" rotation="right-negative" />
      <Image image="leftNegative" rotation="left-negative" />
    </Box>
  </Box>
)
