import { StyleObject } from '../lib/css-types'

export const linkStyle: StyleObject = {
  color: 'gray',
}

export const clientListStyle: StyleObject = {
  color: 'silver',
  lineHeight: 1.45,
  listStyleType: 'none',
  marginBottom: '2em',
  padding: 0,
}

export const clientListItemStyle: StyleObject = {
  display: 'inline-flex',
  ':after': {
    content: "'\\00a0—\\00a0'",
    opacity: 0.5,
  },
  ':last-child:after': {
    content: "''",
  },
}

export const socialListStyle: StyleObject = {
  listStyleType: 'none',
  padding: '0',
  lineHeight: 1.45,
  color: 'silver',
}

export const socialListItemStyle: StyleObject = {
  display: 'inline-flex',
  marginRight: 12,
  ':last-child': {
    marginRight: '0',
  },
}

export const socialLinkStyle: StyleObject = {
  display: 'inline-flex',
}

export const projectListStyle: StyleObject = {
  lineHeight: 1.45,
  marginBottom: '2em',
  paddingLeft: '1.25em',
}

export const projectListItemStyle: StyleObject = {
  marginBottom: 2,
  span: {
    fontWeight: 'bold',
    color: 'white',
  },
}
