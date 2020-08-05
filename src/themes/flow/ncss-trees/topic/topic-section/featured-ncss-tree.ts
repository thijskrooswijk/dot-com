import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { DeepPartial } from '@wheelroom/core'
import {
  primaryButtonNcssNode,
  displayButtonNcssNode,
  secondaryButtonNcssNode,
} from '../../../element-ncss/button-ncss'
import { iconButtonNcssNode, iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { wrapperNcssNode } from '../../grid-ncss'

export const topicSectionFeaturedNcssTree: DeepPartial<TopicSectionNcssTree> = {
  container: {
    ncss: {},
  },
  topic: {
    ncssSwitch: {
      container: {
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        gridGap: 3,
        alignItems: 'center',
      },
    },
    content: {
      ncss: {
        flexDirection: 'column',
        p: 3,
        maxWidth: '35em',
        w: 1,
      },
    },
    actionGroup: {
      ncss: {
        mt: [4, 4, 5],
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
        mb: 0,
      },
    },
    icon: iconTopicNcssNode,
    media: {
      ncss: {
        w: 1,
      },
    },
    embed: embedNcssNode,
  },
  wrapper: wrapperNcssNode,
}
