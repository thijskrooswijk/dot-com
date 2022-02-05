import { ContentModel } from '../data/models'
import { StyleObject } from '../lib/css-types'
import { A, Img, Li, Ul } from './elements'

export const socialListStyle: StyleObject = {
  color: 'silver',
  display: 'grid',
  gap: 12,
  gridAutoFlow: 'column',
  justifyContent: 'start',
  listStyleType: 'none',
  padding: 0,
}

export const socialListItemStyle: StyleObject = {
  height: 24,
  width: 24,
}

type SocialProps = {
  model: ContentModel['socials']
}

export const Socials = ({ model }: SocialProps) => {
  const socials = model
  const socialList = socials.map((social, index) => (
    <Li key={index} css={socialListItemStyle}>
      <A href={social.url}>
        <Img src={social.icon} width="24" height="24" alt={social.alt} />
      </A>
      {` `}
    </Li>
  ))
  return <Ul css={socialListStyle}>{socialList}</Ul>
}
