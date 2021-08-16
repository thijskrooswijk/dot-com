import { PageProps } from 'gatsby'
import { Box } from '../components/Box'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { Link } from '../components/Link'
import { Seo } from '../components/Seo'
import { Text } from '../components/Text'

const NotFoundPage = (props: PageProps) => (
  <Layout>
    <Seo title="404: Not found" />
    <Box
      css={{
        margin: 'auto',
        maxWidth: '1600px',
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
