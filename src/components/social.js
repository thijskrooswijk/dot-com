import React from "react"
import Text from "./text"
import { socialListItemStyle, socialListStyle } from "../styles/style"
import IconLinkedIn from "./iconLinkedIn"
import IconNpm from "./iconNpm"
import IconGithub from "./iconGithub"

const SocialListItem = props => {
  const social = props.social
  return (
    <li css={socialListItemStyle}>
      <a href={social.url} style={{ display: "inline-flex" }}>
        {social.icon === "linkedin" && <IconLinkedIn />}
        {social.icon === "github" && <IconGithub />}
        {social.icon === "npm" && <IconNpm />}
      </a>
      {` `}
    </li>
  )
}

export const SocialList = props => {
  const social = props.social
  const listItems = social.map((social, index) => (
    <SocialListItem key={index} social={social} />
  ))
  return (
    <Text is="ul" css={socialListStyle}>
      {listItems}
    </Text>
  )
}
