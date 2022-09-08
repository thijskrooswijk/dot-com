import { PageProps } from "gatsby"
import { Section } from "../components/elements"
import { Heading } from "../components/heading"
import { Layout } from "../components/layout"
import { Link } from "../components/link"
import { Seo } from "../components/seo"
import { Template } from "../components/template"
import { Text } from "../components/text"
import { StyleObject } from "../lib/css-types"

const sectionStyle: StyleObject = {
  minHeight: "100vh",
  padding: 24,
}

const NotFoundPage: React.FC<PageProps> = props => (
  <Layout>
    <Template>
      <Section css={sectionStyle}>
        <Heading>Not found</Heading>
        <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
        <Link to={"/"}>Please Try this Link</Link>
      </Section>
    </Template>
  </Layout>
)

export default NotFoundPage

export const Head = () => {
  return (
    <Seo
      title="404 Not found"
      keywords={[`Thijs Krooswijk`, `Developer`, `404`]}
    />
  )
}
