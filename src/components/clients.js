import React from "react"
import Text from "./text"
import { clientListItemStyle, clientListStyle } from "../styles/style"

const ClientListItem = props => {
  const client = props.client
  return <li css={clientListItemStyle}>{client}</li>
}

export const ClientList = props => {
  const clients = props.clients
  const listItems = clients.map((clients, index) => (
    <ClientListItem key={index} client={clients} />
  ))
  return (
    <Text is={"ul"} css={clientListStyle}>
      {listItems}
    </Text>
  )
}
