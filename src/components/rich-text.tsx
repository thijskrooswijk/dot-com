import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Inline, INLINES, MARKS } from '@contentful/rich-text-types'
import { StyleObject } from '../lib/css-types'
import { Li, Ol, Ul } from './elements'
import { Heading } from './heading'
import { Link } from './link'
import { Text } from './text'

const headingStyle: StyleObject = {
  color: 'silver',
  fontWeight: 600,
  lineHeight: 1.25,
}

const listStyle: StyleObject = {
  color: 'white',
  lineHeight: 1.675,
  marginBottom: '2em',
  paddingLeft: '1.25em',
}

const listItemStyle: StyleObject = {
  marginBottom: 2,
  p: {
    margin: 0,
  },
}

export const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.DOCUMENT]: (__node, children) => children,
    [BLOCKS.PARAGRAPH]: (__node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (__node, children) => (
      <Heading is="h1">{children}</Heading>
    ),
    [BLOCKS.HEADING_2]: (__node, children) => (
      <Heading is="h2" css={headingStyle}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (__node, children) => (
      <Heading is="h3">{children}</Heading>
    ),
    [BLOCKS.HEADING_4]: (__node, children) => (
      <Heading is="h4">{children}</Heading>
    ),
    [BLOCKS.HEADING_5]: (__node, children) => (
      <Heading is="h5">{children}</Heading>
    ),
    [BLOCKS.HEADING_6]: (__node, children) => (
      <Heading is="h6">{children}</Heading>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (__node, children) => <div>{children}</div>,
    [BLOCKS.UL_LIST]: (__node, children) => <Ul css={listStyle}>{children}</Ul>,
    [BLOCKS.OL_LIST]: (__node, children) => (
      <Ol is="ol" css={listStyle}>
        {children}
      </Ol>
    ),
    [BLOCKS.LIST_ITEM]: (__node, children) => (
      <Li css={listItemStyle}>{children}</Li>
    ),
    [BLOCKS.QUOTE]: (__node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.TABLE]: (__node, children) => (
      <table>
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (__node, children) => <tr>{children}</tr>,
    [BLOCKS.TABLE_CELL]: (__node, children) => <td>{children}</td>,
    [INLINES.ASSET_HYPERLINK]: (node) =>
      defaultInline(INLINES.ASSET_HYPERLINK, node as Inline),
    [INLINES.ENTRY_HYPERLINK]: (node) =>
      defaultInline(INLINES.ENTRY_HYPERLINK, node as Inline),
    [INLINES.EMBEDDED_ENTRY]: (node) =>
      defaultInline(INLINES.EMBEDDED_ENTRY, node as Inline),
    [INLINES.HYPERLINK]: (node, children) => (
      <Link to={node.data.uri}>{children}</Link>
    ),
  },
}

function defaultInline(__type: string, node: Inline): React.ReactNode {
  return (
    <span key={node.data.target.sys.id}>
      type: {node.nodeType} id: {node.data.target.sys.id}
    </span>
  )
}
