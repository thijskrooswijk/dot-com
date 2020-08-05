import { BlogSectionListNcssTree } from '@wheelroom/wheel-blog'
import { DeepPartial } from '@wheelroom/core'
import { wrapperNcssNode } from '../grid-ncss'

export const blogSectionListNcssTree: DeepPartial<BlogSectionListNcssTree> = {
  container: {
    ncss: {
      label: 'blog-section-list-container',
      maxWidth: '1440px',
    },
  },
  blog: {
    ncss: {
      label: 'blog-section-list',
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr 1fr 1fr'],
      gridGap: '16px',
      p: 0,
    },
    item: {
      ncss: {
        label: 'list-item',
        background: 'rgba(232,242,254,1)',
        listStyleType: 'none',
        ':nth-of-type(1)': {
          gridArea: ['1 / 1 / 1 / 1', 'auto / 1 / auto/ 3'],
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
        textDecoration: 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
        objectFit: 'cover',
        h: 1,
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
        flex: '1 1 auto',
        flexDirection: 'column',
        p: 3,
      },
    },
    text: {
      ncss: {
        label: 'list-text',
        flex: '1 1 auto',
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
        flex: 0,
      },
    },
  },
  wrapper: wrapperNcssNode,
}
