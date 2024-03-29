import * as React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { Content } from "../components/content"
import { Section } from "../components/elements"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { Template } from "../components/template"
import { platforms } from "../data/content"
import { ContentModel } from "../data/models"
import { StyleObject } from "../lib/css-types"
import { mq } from "../theme/mq"

const Clock = React.lazy(() => import("../components/clock"))

const sectionStyle = mq({
  alignItems: "center",
  display: "grid",
  gap: 16,
  gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
  justifyItems: "center",
  minHeight: "100vh",
} as StyleObject)

type IndexQueryProps = ContentModel
type IndexPageProps = PageProps<IndexQueryProps>

const IndexPage: React.FC<IndexPageProps> = props => {
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
  const content = { ...contentfulData.contentfulIndex, platforms }

  return (
    <Layout>
      <Template>
        <Section css={sectionStyle}>
          <Content model={content} />
          <React.Suspense fallback={<React.Fragment></React.Fragment>}>
            <Clock />
          </React.Suspense>
        </Section>
      </Template>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <Seo
      title="Software Engineer"
      keywords={[`Thijs Krooswijk`, `Developer`, `Resume`]}
    />
  )
}
