import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

export interface ContentModel {
  heading: string
  clients: {
    company: string
  }[]
  abstract: RenderRichTextData<ContentfulRichTextGatsbyReference>
  footnote: string
  socials: SocialsModel[]
}

export interface SocialsModel {
  alt: string
  icon: string
  url: string
}
