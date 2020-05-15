import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from "../components/box"
import Text from "../components/text"
import Clock from "../components/clock"
import Header from "../components/header"
import Heading from "../components/heading"

import { clients, social, work } from "../data/content"
import { WorkList } from "../components/work"
import { ClientList } from "../components/clients"
import { SocialList } from "../components/social"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Full Stack Developer"
      keywords={[`Thijs Krooswijk`, `Developer`, `Resume`]}
    />
    <Box
      className={"box"}
      display={"flex"}
      m={"auto"}
      style={{
        minHeight: "100vh",
        maxWidth: "1600px",
      }}
    >
      <Box m={"auto"} width={1}>
        <Box
          display={"flex"}
          m={"auto"}
          p={6}
          style={{
            flexFlow: "row wrap",
          }}
        >
          <Header />
          <Box is={"main"}>
            <Text is={"p"} fontSize={[18]} lineHeight={1.45} mb={5}>
              I empowering companies and teams to implement and execute new
              technical solutions that support multi-channel services with speed
              and efficiency. With 12 years of experience, I’ve helped clients
              such as Elsevier, Schiphol, Novartis and NN, to iterate and grow
              over time in an agile process.
            </Text>
            <Heading is="h3">Latest work</Heading>
            <WorkList work={work} />
            <ClientList clients={clients} />
            <Text is="p">
              <small>
                Currently working in <b>Amsterdam</b>
              </small>
            </Text>
            <SocialList social={social} />
          </Box>
        </Box>
      </Box>
      <Clock />
    </Box>
  </Layout>
)

export default IndexPage
