import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"

export type ContentModel = {
  heading: string
  clients: ClientsModel[]
  abstract: RenderRichTextData<ContentfulRichTextGatsbyReference>
  footnote: string
  platforms: PlatformsModel[]
}

export type ClientsModel = string

export type PlatformsModel = {
  alt: string
  icon: string
  url: string
}
