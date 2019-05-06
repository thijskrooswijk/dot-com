import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from "../components/box"
import Text from "../components/text"
import Clock from "../components/clock"
import Header from "../components/header"

import IconGithub from "../components/iconGithub"
import IconLinkedIn from "../components/iconLinkedIn"

function ListItem(props) {
  return <li>{props.value}</li>
}

function ClientList(props) {
  const clients = props.clients
  const listItems = clients.map(client => (
    <ListItem key={client.toString()} value={client} />
  ))
  return (
    <Text is={"ul"} color={"silver"}>
      {listItems}
    </Text>
  )
}

const clients = [
  "Booking.com",
  "Nationale Nederlanden",
  "Elsevier",
  "Schiphol",
  "KLM",
  "United for Wildlife",
  "CM.com",
  "MCI",
  "VGZ",
  "Tilburg University",
  "Hogeschool Utrecht",
  "UWV",
  "VVV",
  "BUMA/Stemra",
  "h19 Centrum voor de kunsten",
  "Podium Bloos",
  "De Ketelfactory",
]

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
      <Box m={"auto"} width={[1, 3 / 4, 3 / 4, 1 / 2]}>
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
              and efficiency. With 10 years of experience, I’ve helped clients
              such as Elsevier, Schiphol, Novartis and NN, to iterate and grow
              over time in an agile process.
            </Text>
            <ClientList clients={clients} />
            <Text is="p">
              <small>
                Currently working in <b>Amsterdam</b>
              </small>
            </Text>
            <Text is="p">
              <a href="https://www.linkedin.com/in/thijskrooswijk/" style={{marginRight:8}}>
                <IconLinkedIn />
              </a>
              {` `}
              <a href="https://www.github.com/thijskrooswijk/">
                <IconGithub />
              </a>
            </Text>
          </Box>
        </Box>
      </Box>
      <Clock />
    </Box>
  </Layout>
)

export default IndexPage
