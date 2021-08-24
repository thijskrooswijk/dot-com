import { Li, Ul } from '@wheelroom/any/react'
import { contentModel } from '../data/content'
import { clientListItemStyle, clientListStyle } from '../theme/style'

interface ClientsProps {
  model: contentModel['clients']
}

export const Clients = ({ model }: ClientsProps) => {
  const clients = model
  const clientList = clients.map((client, index) => (
    <Li key={index} css={clientListItemStyle}>
      {client}
    </Li>
  ))
  return <Ul css={clientListStyle}>{clientList}</Ul>
}
