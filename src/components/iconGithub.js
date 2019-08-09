import React from "react"
import github from "../images/icons/github.svg"

const IconGithub = () => (
  <svg fill={"white"} width={24} height={24}>
    <use xlinkHref={`#${github.id}`} />
  </svg>
)

export default IconGithub
