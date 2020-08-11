import { DeepPartial } from '@wheelroom/core'
import { BlogSectionData } from '@wheelroom/wheel-blog'

// Author data is using the Topic data structure
const authorData = {
  hideAbstract: false,
  hideActions: false,
  hideContent: false,
  hideHeading: false,
  hideIcon: false,
  hideMedia: false,
  hideText: false,
}

export const blogSectionData: DeepPartial<BlogSectionData> = {
  blog: {
    author: authorData,
    hideAbstract: false,
    hideAuthors: false,
    hideCategories: false,
    hideDate: false,
    hideHeader: false,
    hideHeading: false,
    hideMedia: true,
    hideRichText: false,
  },
  list: {
    hideAbstract: true,
    hideCategories: false,
    hideContent: false,
    hideDate: false,
    hideHeading: false,
    hideMedia: true,
    hideText: false,
  },
}
