import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from "../components/box"
import Text from "../components/text"
import Clock from "../components/clock"
import Header from "../components/header"
import Heading from "../components/heading"

import { clients, current, heading, social, text, work } from "../data/content"
import { WorkList } from "../components/work"
import { ClientList } from "../components/clients"
import { SocialList } from "../components/social"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Full Stack Developer"
        keywords={[`Thijs Krooswijk`, `Developer`, `Resume`]}
      />
      <Box
        display="flex"
        m="auto"
        maxWidth="1600px"
        minHeight="100vh"
        flexDirection={["column", "column", "column", "row"]}
      >
        <Box m="auto" width={1}>
          <Box
            display="flex"
            m="auto"
            p={6}
            maxWidth={["712px", "712px", "712px", "100%"]}
            flexWrap="wrap"
            flexDirection="column"
          >
            <Header />
            <Box is="main">
              <Text is="p" fontSize={[18]} lineHeight={1.45} mb={5}>
                {text}
              </Text>
              <Heading is="h3">{heading}</Heading>
              <WorkList work={work} />
              <ClientList clients={clients} />
              <Text is="p" mb="2em">
                {current}
              </Text>
              <SocialList social={social} />
            </Box>
          </Box>
        </Box>
        <Clock />
      </Box>
    </Layout>
  )
}

export default IndexPage
