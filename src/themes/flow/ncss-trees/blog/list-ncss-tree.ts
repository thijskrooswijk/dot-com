import { BlogSectionListNcssTree } from '@wheelroom/wheel-blog'
import { DeepPartial } from '@wheelroom/core'
import { wrapperNcssNode } from '../grid-ncss'

export const blogSectionListNcssTree: DeepPartial<BlogSectionListNcssTree> = {
  container: {
    ncss: {
      label: 'blog-section-list-container',
      maxWidth: '1280px',
    },
  },
  blog: {
    ncss: {
      label: 'blog-section-list',
      display: 'grid',
      gridTemplateColumns: '1fr',
      p: 0,
      w: 1,
      ':hover > li': {
        opacity: 0.5,
      },
      ':hover > li:hover': {
        opacity: 1,
      },
    },
    item: {
      ncss: {
        label: 'list-item',
        listStyleType: 'none',
        transition: 'opacity .25s ease',
      },
    },
    link: {
      ncss: {
        label: 'list-link',
        textDecoration: 'none',
        display: 'block',
        borderTop: '1px solid transparent',
        borderColor: 'sectionBorder',
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
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr 1fr'],
        columnGap: ['8px', '32px'],
        rowGap: '8px',
        px: [0, 5],
        py: 3,
      },
    },
    text: {
      ncss: {
        label: 'list-text',
        gridArea: ['', '2 / 1 / auto / 3'],
      },
    },
    heading: {
      ncss: {
        label: 'list-heading',
        color: 'sectionTextInverted',
        fontSize: 7,
        fontWeight: 3,
        m: 0,
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
        fontSize: 3,
        fontWeight: 7,
        textTransform: 'uppercase',
      },
    },
    date: {
      ncss: {
        label: 'list-date',
        color: 'bullet',
        fontFamily: 'text',
        fontSize: 3,
        gridArea: ['', 'auto / 3 / auto / 4'],
        textAlign: ['left', 'right'],
      },
    },
  },
  wrapper: wrapperNcssNode,
}
