import { ContentModel } from '../data/content'
import { Heading } from './heading'
import { Link } from './link'

interface HeaderProps {
  model: ContentModel['heading']
}

export const Header = ({ model }: HeaderProps) => {
  const heading = model
  return (
    <header>
      <Heading>
        <Link to="/">{heading}</Link>
      </Heading>
    </header>
  )
}
