import { Main } from '@wheelroom/any/react'
import { contentModel } from '../data/content'
import { StyleObject } from '../lib/css-types'
import { mq } from '../theme/mq'
import { Box } from './box'
import { Clients } from './clients'
import { Header } from './header'
import { Heading } from './heading'
import { Projects } from './projects'
import { Socials } from './socials'
import { Text } from './text'

const contentStyle = mq({
  gridColumn: ['1 / 3', '1 / 2'],
  maxWidth: 720,
  margin: 'auto',
  padding: 24,
  width: '100%',
} as StyleObject)

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
      <Header />
      <Main>
        <Text css={textStyle}>{model.text}</Text>
        <Heading is="h3">{model.heading}</Heading>
        <Projects model={model.projects} />
        <Clients model={model.clients} />
        <Text css={currentStyle}>{model.current}</Text>
        <Socials model={model.social} />
      </Main>
    </Box>
  )
}
