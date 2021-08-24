import { Li, Ul } from '@wheelroom/any/react'
import { clientsListItemStyle, clientsListStyle } from '../theme/style'

interface ClientsProps {
  clients: string[]
}

export const Clients = (props: ClientsProps) => {
  const { clients } = props
  const clientsListItems = clients.map((client: any, index: number) => (
    <Li key={index} css={clientsListItemStyle}>
      {client}
    </Li>
  ))
  return <Ul css={clientsListStyle}>{clientsListItems}</Ul>
}
