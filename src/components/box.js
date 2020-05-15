// More info about this implementation read:
// https://github.com/rebassjs/components
// This method is replacing the Clean-Tag package

import system from "@rebass/components"

const Box = system(
  {
    is: "div",
  },
  // core
  "display",
  "space",
  "width",
  "height",
  "color",
  "fontSize",
  "maxWidth",
  // typography
  "fontFamily",
  "textAlign",
  "lineHeight",
  "fontWeight",
  "letterSpacing"
)

export default Box
