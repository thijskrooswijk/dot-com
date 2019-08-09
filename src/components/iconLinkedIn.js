import React from "react"
import linkedIn from "../images/icons/linkedin.svg"

const IconLinkedIn = () => (
  <svg fill={"white"} width={24} height={24}>
    <use xlinkHref={`#${linkedIn.id}`} />
  </svg>
)

export default IconLinkedIn
