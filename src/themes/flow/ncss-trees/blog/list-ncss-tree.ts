import { BlogSectionListNcssTree } from '@wheelroom/wheel-blog'
import { DeepPartial } from '@wheelroom/core'
import { wrapperNcssNode } from '../grid-ncss'

export const blogSectionListNcssTree: DeepPartial<BlogSectionListNcssTree> = {
  container: {
    ncss: {
      label: 'blog-section-list-container',
      alignItems: ['center', 'initial'],
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
    },
  },
  blog: {
    ncss: {
      label: 'blog-section-list',
      flexDirection: ['column', 'row'],
      display: 'flex',
      p: 0,
      m: 0,
      w: 1,
    },
    item: {
      ncss: {
        label: 'list-item',
        background: 'rgba(232,242,254,1)',
        listStyleType: 'none',
        maxWidth: '35em',
        my: 3,
        w: [1, 1 / 2, 1 / 3],
        mx: ['auto', 3],
        ':nth-of-type(1)': {
          background:
            'linear-gradient(50deg, rgba(232,242,254,1) 0%, rgba(242,242,251,1) 100%)',
        },
        ':nth-of-type(2)': {
          background:
            'linear-gradient(50deg, rgba(242,242,251,1) 0%, rgba(249,240,246,1) 100%)',
        },
        ':nth-of-type(3)': {
          background:
            'linear-gradient(50deg, rgba(249,240,246,1) 0%, rgba(252,236,242,1) 100%)',
        },
      },
    },
    link: {
      ncss: {
        label: 'list-link',
        display: 'block',
        textDecoration: 'none',
      },
    },
    media: {
      ncss: {
        label: 'list-media',
      },
    },
    image: {
      picture: {
        ncss: {
          label: 'list-picture',
        },
      },
      ncss: {
        label: 'list-img',
      },
    },
    video: {
      ncss: {
        label: 'list-video',
      },
      description: {
        ncss: {
          label: 'list-video-description',
        },
      },
    },
    content: {
      ncss: {
        label: 'list-content',
        flex: 1,
        flexDirection: 'column',
        p: 3,
      },
    },
    text: {
      ncss: {
        label: 'list-text',
        flex: 1,
      },
    },
    heading: {
      ncss: {
        label: 'list-heading',
        color: 'sectionTextInverted',
        mt: 3,
      },
    },
    abstract: {
      ncss: {
        label: 'list-abstract',
        color: 'sectionTextInverted',
      },
    },
    categories: {
      ncss: {
        label: 'list-categories',
        color: 'azure',
        fontFamily: 'text',
        fontSize: 4,
        order: -1,
        textTransform: 'uppercase',
      },
    },
    date: {
      ncss: {
        label: 'list-date',
        color: 'bullet',
        fontFamily: 'text',
        fontSize: 3,
        mt: 1,
      },
    },
  },
  wrapper: wrapperNcssNode,
}