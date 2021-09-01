import { Main } from '@wheelroom/any/react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { ContentModel } from '../data/models'
import { StyleObject } from '../lib/css-types'
import { Box } from './box'
import { Clients } from './clients'
import { Header } from './header'
import { options } from './rich-text'
import { Socials } from './socials'
import { Text } from './text'

const contentStyle: StyleObject = {
  maxWidth: 720,
  padding: 24,
  width: '100%',
}

const footnoteStyle: StyleObject = {
  marginBottom: 36,
}

interface ContentProps {
  model: ContentModel
}

export const Content = ({ model }: ContentProps) => {
  return (
    <Box css={contentStyle}>
      <Header model={model.heading} />
      <Main>
        {model.abstract && renderRichText(model.abstract, options)}
        <Clients model={model.clients} />
        <Text css={footnoteStyle}>{model.footnote}</Text>
        <Socials model={model.socials} />
      </Main>
    </Box>
  )
}
