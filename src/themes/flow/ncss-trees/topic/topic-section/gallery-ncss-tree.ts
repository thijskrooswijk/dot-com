import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { DeepPartial, deepMerge } from '@wheelroom/core'
import { wrapperNcssNode, containerNcssNode } from '../../grid-ncss'

export const topicSectionGalleryNcssTree: DeepPartial<TopicSectionNcssTree> = {
  container: deepMerge([
    containerNcssNode,
    {
      ncss: {
        display: 'grid',
        alignContent: 'space-around',
        gridAutoColumns: '1fr',
        columnGap: 3,
        rowGap: 3,
        gridTemplateColumns: [
          '1fr 1fr 1fr',
          '1fr 1fr 1fr',
          '1fr 1fr 1fr 1fr 1fr 1fr',
        ],
      },
    },
  ]),
  topic: {
    ncssSwitch: {
      container: {
        justifyContent: 'center',
        py: [3, 3, 0],
      },
    },
    media: {
      ncss: {
        m: 'auto',
      },
    },
    image: {
      ncss: {
        maxHeight: '32px',
        maxWidth: '108px',
      },
    },
  },
  wrapper: deepMerge([
    wrapperNcssNode,
    {
      ncss: {
        py: 6,
      },
    },
  ]),
}
