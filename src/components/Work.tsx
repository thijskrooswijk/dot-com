import { A, Li, Span, Ul } from '@wheelroom/any/react'
import { linkStyle, workListItemStyle, workListStyle } from '../theme/style'

interface WorkProps {
  work: {
    client: string
    description: string
    url?: string
  }[]
}

export const Work = (props: WorkProps) => {
  const { work } = props
  const workListItems = work.map((work, index) => (
    <Li key={index} css={workListItemStyle}>
      <A href={work.url} css={linkStyle}>
        <Span>{work.client}</Span>
        {` `}
        {work.description}
      </A>
    </Li>
  ))
  return <Ul css={workListStyle}>{workListItems}</Ul>
}
