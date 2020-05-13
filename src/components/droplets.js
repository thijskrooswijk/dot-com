import React from "react"
import Box from "./box"
import { dropletStyle } from "../styles/style"

const Droplets = () => (
  <Box m={"auto"} width={[1, 1, 1 / 2]}>
    <Box
      width={[1, 3 / 4, 3 / 4, 1 / 2]}
      display={"flex"}
      m={"auto"}
      p={"50%"}
      css={{
        flexFlow: "row wrap",
        position: "relative",
      }}
    >
      <Box css={dropletStyle} />
      <Box css={dropletStyle} />
      <Box css={dropletStyle} />
      <Box css={dropletStyle} />
      <Box css={dropletStyle} />
      <Box css={dropletStyle} />
    </Box>
  </Box>
)

export default Droplets
