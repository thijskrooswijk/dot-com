import { Clients } from '../components/clients'
import { Header } from '../components/header'
import { Heading } from '../components/heading'
import { Social } from '../components/social'
import { Text } from '../components/text'
import { Work } from '../components/work'
import { clients, current, heading, social, text, work } from '../data/content'
import { StyleObject } from '../lib/css-types'
import { mq } from '../theme/mq'
import { Box } from './box'

const contentStyle = mq({
  gridColumn: ['1 / 3', '1 / 2'],
  maxWidth: 720,
  margin: 'auto',
  padding: 24,
  width: '100%',
} as StyleObject)

export const Content = () => (
  <Box css={contentStyle}>
    <Header />
    <main>
      <Text css={{ fontSize: 18, lineHeight: 1.45, marginBottom: 16 }}>
        {text}
      </Text>
      <Heading is="h3">{heading}</Heading>
      <Work work={work} />
      <Clients clients={clients} />
      <Text css={{ marginBottom: '2em' }}>{current}</Text>
      <Social social={social} />
    </main>
  </Box>
)
