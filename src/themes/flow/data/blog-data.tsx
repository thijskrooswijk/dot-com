import { DeepPartial } from '@wheelroom/core'
import { BlogSectionData } from '@wheelroom/wheel-blog'

export const blogSectionData: DeepPartial<BlogSectionData> = {
  blog: {
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
    hideAbstract: false,
    hideCategories: false,
    hideContent: false,
    hideDate: false,
    hideHeading: false,
    hideMedia: true,
    hideText: false,
  },
}
