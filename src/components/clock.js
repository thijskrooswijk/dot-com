import React from "react"
import Box from "./box"
import Image from "./image"

const Clock = () => (
  <Box m="auto" width={1}>
    <Box
      width={1}
      maxWidth="35em"
      display="flex"
      m="auto"
      p={6}
      flexDirection="row"
      flexWrap="wrap"
    >
      <Image image="right" rotation="right" />
      <Image image="left" rotation="left" />
      <Image image="right" rotation="right" />
      <Image image="left" rotation="left" />

      <Image image="rightNegative" rotation="right-negative" />
      <Image image="leftNegative" rotation="left-negative" />
      <Image image="rightNegative" rotation="right-negative" />
      <Image image="leftNegative" rotation="left-negative" />

      <Image image="right" rotation="right" />
      <Image image="left" rotation="left" />
      <Image image="right" rotation="right" />
      <Image image="left" rotation="left" />

      <Image image="rightNegative" rotation="right-negative" />
      <Image image="leftNegative" rotation="left-negative" />
      <Image image="rightNegative" rotation="right-negative" />
      <Image image="leftNegative" rotation="left-negative" />
    </Box>
  </Box>
)

export default Clock
