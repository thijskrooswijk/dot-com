// More info about this implementation read:
// https://github.com/rebassjs/components
// This method is replacing the Clean-Tag package

import system from "@rebass/components"

const Heading = system(
  {
    is: "h1",
    mt: 0,
  },
  // core
  "space",
  "width",
  "color",
  "fontSize",
  // typography
  "fontFamily",
  "textAlign",
  "lineHeight",
  "fontWeight",
  "letterSpacing"
)

export default Heading
