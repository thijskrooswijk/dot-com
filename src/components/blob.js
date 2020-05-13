import React from "react"
import Box from "./box"
import { blobsStyle, blobStyle } from "../styles/style"

const Blob = () => (
  <Box m={"auto"} width={[1, 1, 1 / 2]}>
    <Box
      width={1}
      display={"flex"}
      m={"auto"}
      bg={"#222"}
      css={{
        flexFlow: "row wrap",
        position: "relative",
      }}
    >
      <Box css={blobsStyle}>
        <Box css={blobStyle} />
        <Box css={blobStyle} />
        <Box css={blobStyle} />
        <Box css={blobStyle} />
      </Box>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </Box>
  </Box>
)

export default Blob
