import { StyleObject } from '../lib/css-types'

export const clientListStyle: StyleObject = {
  color: 'silver',
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
  color: 'silver',
  listStyleType: 'none',
  padding: '0',
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
  lineHeight: 1.675,
  marginBottom: '2em',
  paddingLeft: '1.25em',
}

export const projectListItemStyle: StyleObject = {
  marginBottom: 2,
  span: {
    fontWeight: 'bold',
  },
}
