import { Main } from '@wheelroom/any/react'
import { contentModel } from '../data/content'
import { StyleObject } from '../lib/css-types'
import { Box } from './box'
import { Clients } from './clients'
import { Header } from './header'
import { Heading } from './heading'
import { Projects } from './projects'
import { Socials } from './socials'
import { Text } from './text'

const contentStyle: StyleObject = {
  maxWidth: 720,
  padding: 24,
  width: '100%',
}

const textStyle: StyleObject = {
  fontSize: 18,
  lineHeight: 1.45,
  marginBottom: 16,
}

const currentStyle: StyleObject = {
  marginBottom: '2em',
}

interface ContentProps {
  model: contentModel
}

export const Content = ({ model }: ContentProps) => {
  return (
    <Box css={contentStyle}>
      <Header model={model.header} />
      <Main>
        <Text css={textStyle} children={model.text} />
        <Heading is="h3" children={model.subHeading} />
        <Projects model={model.projects} />
        <Clients model={model.clients} />
        <Text css={currentStyle} children={model.current} />
        <Socials model={model.socials} />
      </Main>
    </Box>
  )
}
