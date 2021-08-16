import { PageProps } from 'gatsby'
import { Box } from '../components/Box'
import { Clients } from '../components/Clients'
import { Clock } from '../components/Clock'
import { Header } from '../components/Header'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { Social } from '../components/Social'
import { Text } from '../components/Text'
import { Work } from '../components/Work'
import { clients, current, heading, social, text, work } from '../data/content'
import { mq } from '../theme/mq'

const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <Seo
        title="Open-source Developer"
        keywords={[`Thijs Krooswijk`, `Developer`, `Resume`]}
      />
      <Box
        css={mq({
          display: 'flex',
          flexDirection: ['column', 'row'],
          margin: 'auto',
          maxWidth: 1600,
          minHeight: '100vh',
        })}
      >
        <Box
          css={{
            margin: 'auto',
            width: '100%',
          }}
        >
          <Box
            css={{
              display: 'flex',
              margin: 'auto',
              padding: 16,
              maxWidth: 712,
              flexWrap: 'wrap',
              flexDirection: 'column',
            }}
          >
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
        </Box>
        <Clock />
      </Box>
    </Layout>
  )
}

export default IndexPage
