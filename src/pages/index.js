import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from "../components/box"
import Text from "../components/text"
import Clock from "../components/clock"
import Header from "../components/header"

import IconGithub from "../components/iconGithub"
import IconLinkedIn from "../components/iconLinkedIn"
import IconNpm from "../components/iconNpm"
import Heading from "../components/heading"

const workListStyle = `
  padding-left: 1.25em;
`

const workListItemStyle = `
  margin-bottom: 2px;
  span {
    font-weight: bold;
    color: white;
  }
`

const clientListStyle = `
  list-style-type: none;
  padding: 0;
  line-height: 1.45;
  color: silver;
`

const clientListItemStyle = `
  display: inline-block;
  &:after {
    content: "\\00a0—\\00a0";
    opacity: .5;
  }
  &:last-child:after {
      content: "";
  }
`

function ClientListItem(props) {
  const client = props.client
  return <li css={clientListItemStyle}>{client}</li>
}

function ClientList(props) {
  const clients = props.clients
  const listItems = clients.map((clients, index) => (
    <ClientListItem key={index} client={clients} />
  ))
  return (
    <Text is={"ul"} css={clientListStyle}>
      {listItems}
    </Text>
  )
}

function WorkListItem(props) {
  const work = props.work
  return (
    <li css={workListItemStyle}>
      <a href={work.url}>
        <span>{work.client}</span>
        {` `}
        {work.description}
      </a>
    </li>
  )
}

function WorkList(props) {
  const work = props.work
  const listItems = work.map((work, index) => (
    <WorkListItem key={index} work={work} />
  ))
  return (
    <Text is={"ul"} css={workListStyle}>
      {listItems}
    </Text>
  )
}

const work = [
  {
    client: "Studio Drift – Ego",
    description: "Art installation and management",
    url: "https://www.studiodrift.com/work#/ego/",
  },
  {
    client: "Elsevier",
    description: "Web/design platform, Applications and eCommerce site",
    url: "https://webshop.elsevier.com/",
  },
  {
    client: "Wearlenses by Novartis",
    description: "eCommerce platform",
    url: "https://www.wearlenses.co.uk/",
  },
  {
    client: "Schiphol",
    description: "Web/design platform and prototyping",
    url: "https://www.schiphol.nl/",
  },
  {
    client: "Nationale Nederlanden",
    description: "Web applications",
    url: "https://www.nn.nl/",
  },
]

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
            <Heading is="h3">Latest work</Heading>
            <WorkList work={work} />
            <ClientList clients={clients} />
            <Text is="p">
              <small>
                Currently working in <b>Amsterdam</b>
              </small>
            </Text>
            <Text is="p">
              <a
                href="https://www.linkedin.com/in/thijskrooswijk/"
                style={{ marginRight: 8 }}
              >
                <IconLinkedIn />
              </a>
              {` `}
              <a
                href="https://www.github.com/thijskrooswijk/"
                style={{ marginRight: 8 }}
              >
                <IconGithub />
              </a>
              {` `}
              <a href="https://www.npmjs.com/~thijskrooswijk">
                <IconNpm />
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
