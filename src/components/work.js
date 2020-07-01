import React from "react"
import Text from "./text"
import { linkStyle, workListItemStyle, workListStyle } from "../styles/style"

const WorkListItem = (props) => {
  const work = props.work
  return (
    <li css={workListItemStyle}>
      <a href={work.url} css={linkStyle}>
        <span>{work.client}</span>
        {` `}
        {work.description}
      </a>
    </li>
  )
}

export const WorkList = (props) => {
  const work = props.work
  const listItems = work.map((work, index) => (
    <WorkListItem key={index} work={work} />
  ))
  return (
    <Text is="ul" css={workListStyle}>
      {listItems}
    </Text>
  )
}
