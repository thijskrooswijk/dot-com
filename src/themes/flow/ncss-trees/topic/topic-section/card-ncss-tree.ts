import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { deepMerge, DeepPartial } from '@wheelroom/core'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'
import { primaryButtonNcssNode } from '../../../element-ncss/button-ncss'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'

const containerNcss = {
  border: '1px solid transparent',
  borderColor: 'cardBorder',
  borderRadius: 8,
  textDecoration: 'none',
  pt: 5,
}

export const topicSectionCardNcssTree: DeepPartial<TopicSectionNcssTree> = {
  container: deepMerge([
    containerNcssNode,
    {
      ncss: {
        display: 'grid',
        gridAutoColumns: '1fr',
        gridColumnGap: '16px',
        gridRowGap: '16px',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyContent: 'center',
      },
    },
  ]),
  topic: {
    ncssSwitch: {
      container: {
        ...containerNcss,
      },
      containerAsLink: {
        ...containerNcss,
        pt: 0,
        overflow: 'hidden',
        textDecoration: 'none',
        boxShadow: '0 0 16px',
        color: 'cardShadow',
        transition: 'transform .125s ease',
        ':hover': {
          transform: 'translate3d(0, -4px, 0)',
        },
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
    content: {
      ncss: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        color: 'sectionTextInverted',
        p: 5,
      },
    },
    actionGroup: {
      ncss: {
        flex: '0',
        mt: 3,
      },
    },
    action: primaryButtonNcssNode,
    text: {
      ncss: {
        display: 'block',
        flex: '1 1 auto',
      },
    },
    abstract: {
      ncss: {
        mb: 0,
      },
    },
    icon: iconTopicNcssNode,
    media: {
      ncss: {},
    },
    embed: embedNcssNode,
    image: {
      ncss: {
        h: 1,
        objectFit: 'cover',
      },
      picture: {
        ncss: {
          display: 'block',
          h: '178px',
        },
      },
    },
  },
  wrapper: wrapperNcssNode,
}

export const topicAsFullLinkNcssNode = {
  topic: {
    ncss: {
      label: 'topic-card-shadow',
      transition: 'transform .25s ease 0s',
      transform: 'scale(1)',
      ':hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)',
      },
    },
  },
}
