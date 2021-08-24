import { PageProps } from 'gatsby'
import { Box } from '../components/box'
import { Heading } from '../components/heading'
import { Layout } from '../components/layout'
import { Link } from '../components/link'
import { Seo } from '../components/seo'
import { Text } from '../components/text'

const NotFoundPage = (props: PageProps) => (
  <Layout>
    <Seo title="404: Not found" />
    <Box
      css={{
        margin: 'auto',
        maxWidth: 1440,
        padding: 16,
        width: '100%',
      }}
    >
      <Heading>NOT FOUND</Heading>
      <Text>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
      <Link to={'/'}>Please Try this Link</Link>
    </Box>
  </Layout>
)

export default NotFoundPage
