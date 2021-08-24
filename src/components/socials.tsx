import { A, Img, Li, Ul } from '@wheelroom/any/react'
import { contentModel } from '../data/content'
import {
  socialLinkStyle,
  socialListItemStyle,
  socialListStyle,
} from '../theme/style'

interface SocialProps {
  model: contentModel['social']
}

export const Socials = ({ model }: SocialProps) => {
  const socials = model
  const socialList = socials.map((social, index) => (
    <Li key={index} css={socialListItemStyle}>
      <A href={social.url} css={socialLinkStyle}>
        <Img src={social.icon} width="24" height="24" alt={social.alt} />
      </A>
      {` `}
    </Li>
  ))
  return <Ul css={socialListStyle}>{socialList}</Ul>
}
