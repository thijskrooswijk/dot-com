import React from "react"
import Box from "./box"

const Blob = () => (
  <Box m={"auto"} width={[1, 1, 1 / 2]}>
    <Box
      width={[1, 3 / 4, 3 / 4, 1 / 2]}
      display={"flex"}
      m={"auto"}
      p={"20%"}
      bg={"#222"}
      style={{
        flexFlow: "row wrap",
        position: "relative",
      }}
    >
      <div className="blobs">
        <div className="blob"/>
        <div className="blob"/>
        <div className="blob"/>
        <div className="blob"/>
      </div>

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
