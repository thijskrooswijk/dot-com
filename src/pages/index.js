import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from "../components/box"
import Text from "../components/text"
import Droplet from "../components/droplets"
import Clock from "../components/clock"
import Header from "../components/header"
import Blob from "../components/blob"

function Artwork() {
  let setNumber = Math.floor(Math.random() * 3) + 1
  if (setNumber === 1) {
    return <Droplet />
  } else if (setNumber === 2) {
    return <Clock />
  } else {
    return <Blob />
  }
}

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
            <ul>
              <li>Booking.com</li>
              <li>Nationale Nederlanden</li>
              <li>Elsevier</li>
              <li>Schiphol</li>
              <li>KLM</li>
              <li>CM</li>
              <li>VGZ</li>
              <li>MCI</li>
              <li>Tilburg University</li>
              <li>Hogeschool Utrecht</li>
              <li>UWV</li>
              <li>VVV</li>
              <li>BUMA/Stemra</li>
              <li>Gimbrère Mode</li>
              <li>h19 Centrum voor de kunsten</li>
              <li>Podium Bloos</li>
              <li>De Ketelfactory</li>
            </ul>
            <Text is="p">
              <small>
                Currently working in <b>Amsterdam</b>
              </small>
            </Text>
            <Text is="p">
              <a href="https://www.linkedin.com/in/thijskrooswijk/">LinkedIn</a>{" "}
              / <a href="https://www.github.com/thijskrooswijk/">Github</a>
            </Text>
          </Box>
        </Box>
      </Box>
      <Artwork />
    </Box>
  </Layout>
)

export default IndexPage
