import { Section } from '@wheelroom/any/react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { Clock } from '../components/clock'
import { Content } from '../components/content'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { Template } from '../components/template'
import { socials } from '../data/content'
import { ContentModel } from '../data/models'
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

type IndexQueryProps = ContentModel
type IndexPageProps = PageProps<IndexQueryProps>

const IndexPage = (props: IndexPageProps) => {
  let { data } = props
  const contentfulData = useStaticQuery(graphql`
    query {
      contentfulIndex {
        abstract {
          raw
        }
        clients
        footnote
        heading
      }
    }
  `)
  data = { ...contentfulData.contentfulIndex, socials }
  return (
    <Layout>
      <Seo
        title="Open-source Developer"
        keywords={[`Thijs Krooswijk`, `Developer`, `Resume`]}
      />
      <Template>
        <Section css={sectionStyle}>
          <Content model={data} />
          <Clock />
        </Section>
      </Template>
    </Layout>
  )
}

export default IndexPage
