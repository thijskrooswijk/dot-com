import React from "react"
import Box from "./box"
import Image from "./image"

const Clock = () => (
  <Box m={"auto"} width={[1, 1, 1 / 2]}>
    <Box
      width={[1, 3 / 4, 3 / 4, 1 / 2]}
      display={"flex"}
      m={"auto"}
      p={6}
      style={{
        flexFlow: "row wrap",
      }}
    >
      <Image image={"right"} rotation={"right"} />
      <Image image={"left"} rotation={"left"} />
      <Image image={"right"} rotation={"right"} />
      <Image image={"left"} rotation={"left"} />

      <Image image={"rightNegative"} rotation={"right-negative"} />
      <Image image={"leftNegative"} rotation={"left-negative"} />
      <Image image={"rightNegative"} rotation={"right-negative"} />
      <Image image={"leftNegative"} rotation={"left-negative"} />

      <Image image={"right"} rotation={"right"} />
      <Image image={"left"} rotation={"left"} />
      <Image image={"right"} rotation={"right"} />
      <Image image={"left"} rotation={"left"} />

      <Image image={"rightNegative"} rotation={"right-negative"} />
      <Image image={"leftNegative"} rotation={"left-negative"} />
      <Image image={"rightNegative"} rotation={"right-negative"} />
      <Image image={"leftNegative"} rotation={"left-negative"} />
    </Box>
  </Box>
)

export default Clock
