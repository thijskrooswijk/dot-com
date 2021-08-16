import { A, Img, Li, Ul } from '@wheelroom/any/react'
import {
  socialLinkStyle,
  socialListItemStyle,
  socialListStyle
} from '../theme/style'

interface SocialProps {
  social: {
    url: string
    icon: string
    alt: string
  }[]
}

export const Social = (props: SocialProps) => {
  const { social } = props
  const listItems = social.map((social, index) => (
    <Li key={index} css={socialListItemStyle}>
      <A href={social.url} css={socialLinkStyle}>
        <Img src={social.icon} width="24" height="24" alt={social.alt} />
      </A>
      {` `}
    </Li>
  ))
  return <Ul css={socialListStyle}>{listItems}</Ul>
}
