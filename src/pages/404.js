import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading"
import Text from "../components/text"
import Box from "../components/box"
import Link from "../components/link"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box
      m={"auto"}
      p={4}
      width={[1]}
      style={{
        maxWidth: "1600px",
      }}
    >
      <Heading is={"h1"}>NOT FOUND</Heading>
      <Text is={"p"}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
      <Link to={"/"}>Please Try this Link</Link>
    </Box>
  </Layout>
)

export default NotFoundPage
