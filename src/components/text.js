// More info about this implementation read:
// https://github.com/rebassjs/components
// This method is replacing the Clean-Tag package

import system from "@rebass/components"

const Text = system(
  {
    is: "p",
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

export default Text
