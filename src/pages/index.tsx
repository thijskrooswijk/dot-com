import { PageProps } from 'gatsby'
import { Box } from '../components/box'
import { Clock } from '../components/clock'
import { Content } from '../components/content'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { content } from '../data/content'
import { StyleObject } from '../lib/css-types'

const indexPageStyle: StyleObject = {
  width: '100%',
  margin: 'auto',
  maxWidth: 1440,
}

const sectionStyle: StyleObject = {
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(2, 1fr)',
  minHeight: '100vh',
}

const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <Seo
        title="Open-source Developer"
        keywords={[`Thijs Krooswijk`, `Developer`, `Resume`]}
      />
      <Box css={indexPageStyle}>
        <Box css={sectionStyle} role="group">
          <Content content={content} />
          <Clock />
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
