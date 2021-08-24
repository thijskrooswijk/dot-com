import { PageProps } from 'gatsby'
import { Box } from '../components/box'
import { Clock } from '../components/clock'
import { Content } from '../components/content'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { content } from '../data/content'

const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <Seo
        title="Open-source Developer"
        keywords={[`Thijs Krooswijk`, `Developer`, `Resume`]}
      />
      <Box
        css={{
          width: '100%',
          margin: 'auto',
          maxWidth: 1440,
          
        }}
      >
        <Box
          role="group"
          css={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(2, 1fr)',
            minHeight: '100vh',
          }}
        >
          <Content content={content} />
          <Clock />
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
