import { renderRichText } from "gatsby-source-contentful/rich-text"
import { ContentModel } from "../data/models"
import { StyleObject } from "../lib/css-types"
import { Box } from "./box"
import { Clients } from "./clients"
import { Header } from "./header"
import { options } from "./rich-text"
import { Platforms } from "./platforms"
import { Text } from "./text"

const contentStyle: StyleObject = {
  boxSizing: "border-box",
  maxWidth: 720,
  padding: 24,
  width: "100%",
}

const footnoteStyle: StyleObject = {
  marginBottom: 36,
}

interface ContentProps {
  model: ContentModel
}

export const Content = ({ model }: ContentProps) => {
  const { heading, abstract, clients, footnote, platforms } = model

  return (
    <Box css={contentStyle}>
      <Header>{heading}</Header>
      <main role="main" id="main">
        {abstract && renderRichText(abstract, options)}
        <Clients model={clients} />
        <Text css={footnoteStyle}>{footnote}</Text>
        <Platforms model={platforms} />
      </main>
    </Box>
  )
}
