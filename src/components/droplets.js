import React from "react"
import Box from "./box"

const Droplets = () => (
  <Box m={"auto"} width={[1, 1, 1 / 2]}>
    <Box
      width={[1, 3 / 4, 3 / 4, 1 / 2]}
      display={"flex"}
      m={"auto"}
      p={"50%"}
      style={{
        flexFlow: "row wrap",
        position: "relative",
      }}
    >
      <Box className="ring" />
      <Box className="ring" />
      <Box className="ring" />
      <Box className="ring" />
      <Box className="ring" />
      <Box className="ring" />
    </Box>
  </Box>
)

export default Droplets
