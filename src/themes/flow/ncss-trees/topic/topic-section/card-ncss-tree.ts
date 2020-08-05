import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { deepMerge, DeepPartial } from '@wheelroom/core'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'
import { primaryButtonNcssNode } from '../../../element-ncss/button-ncss'
import { embedNcssNode } from '../../embed-ncss'

const containerNcss = {
  border: '1px solid transparent',
  borderColor: 'cardBorder',
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
        columnGap: 3,
        rowGap: 3,
        gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
        maxWidth: ['30em', '1440px'],
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
        borderColor: 'white',
        transition: 'transform .25s ease',
        ':hover': {
          transform: 'translate3d(0, -8px, 0)',
        },
        ':nth-of-type(3n+1)': {
          backgroundImage:
            'linear-gradient(50deg, rgba(232,242,254,1) 0%, rgba(242,242,251,1) 100%)',
          ':hover': {
            backgroundImage:
              'linear-gradient(50deg, rgba(232,242,254,1) 100%, rgba(242,242,251,1) 0%)',
          },
        },
        ':nth-of-type(3n+2)': {
          backgroundImage:
            'linear-gradient(50deg, rgba(242,242,251,1) 0%, rgba(249,240,246,1) 100%)',
          ':hover': {
            background: 'rgba(249,240,246,1) ',
          },
        },
        ':nth-of-type(3n+3)': {
          backgroundImage:
            'linear-gradient(50deg, rgba(249,240,246,1) 0%, rgba(252,236,242,1) 100%)',
          ':hover': {
            background: 'rgba(252,236,242,1)',
          },
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
    icon: {
      ncss: {
        color: 'ghost',
        strokeWidth: '.5px',
        mb: 6,
      },
    },
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
  wrapper: deepMerge([
    wrapperNcssNode,
    {
      ncss: {
        py: 8,
      },
    },
  ]),
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
