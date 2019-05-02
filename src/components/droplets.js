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
        position: "relative"
      }}
    >
      <Box id="r1" className="ring"/>
      <Box id="r2" className="ring"/>
      <Box id="r3" className="ring"/>
      <Box id="r4" className="ring"/>
      <Box id="r5" className="ring"/>
      <Box id="r6" className="ring"/>
    </Box>
  </Box>
)

export default Droplets
