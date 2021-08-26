import { Section } from '@wheelroom/any/react'
import { PageProps } from 'gatsby'
import { Template } from '../components/template'
import { Clock } from '../components/clock'
import { Content } from '../components/content'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { content } from '../data/content'
import { StyleObject } from '../lib/css-types'
import { mq } from '../theme/mq'

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
      <Template>
        <Section css={sectionStyle}>
          <Content model={content} />
          <Clock />
        </Section>
      </Template>
    </Layout>
  )
}

export default IndexPage
