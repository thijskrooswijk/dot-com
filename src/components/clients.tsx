import { Li, Ul } from '@wheelroom/any/react'
import { ContentModel } from '../data/models'
import { StyleObject } from '../lib/css-types'

export const clientListStyle: StyleObject = {
  color: 'silver',
  listStyleType: 'none',
  marginBottom: '2em',
  padding: 0,
}

export const clientListItemStyle: StyleObject = {
  display: 'inline-flex',
  ':after': {
    content: "'\\00a0—\\00a0'",
    opacity: 0.5,
  },
  ':last-child:after': {
    content: "''",
  },
}

interface ClientsProps {
  model: ContentModel['clients']
}

export const Clients = ({ model }: ClientsProps) => {
  const clients = model
  const clientList = clients.map((company, index) => (
    <Li key={index} css={clientListItemStyle}>
      {company}
    </Li>
  ))
  return <Ul css={clientListStyle}>{clientList}</Ul>
}
