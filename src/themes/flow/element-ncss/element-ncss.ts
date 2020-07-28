import { ElementResetNcssTree } from '@wheelroom/core'
import { headingNcss } from './heading-ncss'
import { paragraphNcssNode } from './paragraph-ncss'
import { primaryButtonNcssNode } from './button-ncss'

export const elementNcss: ElementResetNcssTree = {
  a: {
    ncss: {
      color: 'link',
      ':focus': {
        outlineColor: 'outline',
      },
    },
  },
  any: {
    ncss: {},
  },
  blockquote: {
    ncss: {
      px: [3, 5, 7],
      mx: 0,
      my: [4, 5, 6],
      '>p': {
        fontSize: 8,
        fontStyle: 'italic',
      },
    },
  },
  box: {
    ncss: {},
  },
  button: primaryButtonNcssNode,
  code: {
    ncss: {
      whiteSpace: 'pre',
    },
  },
  container: {
    ncss: {},
  },
  dd: {
    ncss: {},
  },
  dl: {
    ncss: {},
  },
  dt: {
    ncss: {},
  },
  featherIcon: {
    ncss: {},
  },
  flex: {
    ncss: {},
  },
  fluid: {
    ncss: {},
  },
  gLink: {
    ncss: {
      color: 'link',
      ':focus': {
        outlineColor: 'outline',
      },
    },
  },
  h1: {
    ncss: {
      ...headingNcss,
      fontSize: [10, 10, 11, 11],
    },
  },
  h2: {
    ncss: {
      ...headingNcss,
      fontSize: [9, 9, 10, 10],
    },
  },
  h3: {
    ncss: {
      ...headingNcss,
      fontSize: [7, 7, 8, 8],
    },
  },
  h4: {
    ncss: {
      ...headingNcss,
      fontSize: [6, 6, 7, 7],
    },
  },
  h5: {
    ncss: {
      ...headingNcss,
      fontSize: [6, 6, 7, 7],
    },
  },
  h6: {
    ncss: {
      ...headingNcss,
      fontSize: [6, 6, 7, 7],
    },
  },
  hr: {
    ncss: {},
  },
  embed: {
    ncss: {},
  },
  image: {
    ncss: {},
    figcaption: {
      ncss: {},
    },
    picture: {
      ncss: {},
    },
  },
  kbd: {
    ncss: {},
  },
  mediaBreakpoint: {
    ncss: {},
    picture: {
      ncss: {},
    },
  },
  small: {
    ncss: {},
  },
  sub: {
    ncss: {},
  },
  sup: {
    ncss: {},
  },
  li: {
    ncss: {},
  },
  ol: {
    ncss: {},
  },
  p: paragraphNcssNode,
  pre: {
    ncss: {
      bg: 'codeBg',
      p: 3,
    },
  },
  samp: {
    ncss: {},
  },
  strong: {
    ncss: {},
  },
  table: {
    ncss: {},
  },
  textIcon: {
    ncss: {},
  },
  td: {
    ncss: {},
  },
  th: {
    ncss: {},
  },
  tr: {
    ncss: {},
  },
  ul: {
    ncss: {},
  },
  time: {
    ncss: {},
  },
  video: {
    description: {
      ncss: {},
    },
    ncss: {
      ':focus': {
        outlineColor: 'outline',
      },
    },
  },
  wrapper: {
    ncss: {
      bg: 'sectionBgInverted',
      color: 'black',
    },
  },
}
