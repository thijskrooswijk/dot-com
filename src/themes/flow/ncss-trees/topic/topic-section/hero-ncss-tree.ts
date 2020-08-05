import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { DeepPartial, deepMerge } from '@wheelroom/core'
import {
  primaryButtonNcssNode,
  displayButtonNcssNode,
  secondaryButtonNcssNode,
} from '../../../element-ncss/button-ncss'
import { iconButtonNcssNode, iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'

export const topicSectionHeroNcssTree: DeepPartial<TopicSectionNcssTree> = {
  container: deepMerge([
    containerNcssNode,
    {
      ncss: {
        display: 'grid',
        gridAutoColumns: '1fr',
        columnGap: 3,
        rowGap: 3,
        gridTemplateColumns: ['1fr', '1fr 1fr 1fr'],
        maxWidth: '1280px',
        mx: 'auto',
      },
    },
  ]),
  topic: {
    ncssSwitch: {
      container: {
        gridArea: '1 / 1 / 2 / 3',
      },
    },
    content: {
      ncss: {
        p: 5,
        maxWidth: '80em',
      },
    },
    actionGroup: {
      ncss: {
        maxWidth: '30em',
        mt: 5,
      },
    },
    action: {
      ncss: {
        ...primaryButtonNcssNode.ncss,
        ...displayButtonNcssNode.ncss,
        ':nth-of-type(2)': {
          ...secondaryButtonNcssNode.ncss,
          ...displayButtonNcssNode.ncss,
        },
      },
      icon: iconButtonNcssNode,
    },
    abstract: {
      ncss: {
        fontSize: [7, 7, 8, 8],
        mb: 0,
      },
    },
    icon: iconTopicNcssNode,
    media: {
      ncss: {
        bottom: '0',
        left: '0',
        position: 'absolute',
        right: '0',
        top: '0',
        overflow: 'hidden',
        zIndex: -1,
      },
    },
    embed: embedNcssNode,
    image: {
      ncss: {
        h: 1,
        objectFit: 'cover',
      },
      picture: {
        ncss: {
          h: 1,
          w: 1,
        },
      },
    },
    video: {
      ncss: {
        h: 1,
      },
    },
  },
  wrapper: deepMerge([
    wrapperNcssNode,
    {
      ncss: {
        py: 8,
      },
    },
  ]),
}
