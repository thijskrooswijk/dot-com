import { Section } from '@wheelroom/any/react'
import { PageProps } from 'gatsby'
import { Box } from '../components/box'
import { Clock } from '../components/clock'
import { Content } from '../components/content'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { content } from '../data/content'
import { StyleObject } from '../lib/css-types'
import { mq } from '../theme/mq'

const indexPageStyle: StyleObject = {
  width: '100%',
  margin: 'auto',
  maxWidth: 1440,
}

const sectionStyle = mq({
  alignItems: 'center',
  display: 'grid',
  gap: 16,
  gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
  justifyItems: 'center',
  minHeight: '100vh',
} as StyleObject)

const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <Seo
        title="Open-source Developer"
        keywords={[`Thijs Krooswijk`, `Developer`, `Resume`]}
      />
      <Box css={indexPageStyle}>
        <Section css={sectionStyle}>
          <Content model={content} />
          <Clock />
        </Section>
      </Box>
    </Layout>
  )
}

export default IndexPage
