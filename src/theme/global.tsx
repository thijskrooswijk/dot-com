import { css } from '@emotion/react'
import { isBrowser } from '../lib/is-browser'

const generateColorCode = () => Math.round(Math.random() * 255)

const createRgba = () => {
  return (
    'rgba(' +
    generateColorCode() +
    ',' +
    generateColorCode() +
    ',' +
    generateColorCode() +
    ', 1)'
  )
}

const renderGradiant = () => {
  if (isBrowser) {
    return (
      'background: radial-gradient(68.13% 100% at 100% 0,' +
      createRgba() +
      ' 0,rgba(0,0,0,0) 100%), linear-gradient(95.52deg,#000,rgba(0,0,0,0)), linear-gradient(95.52deg,' +
      createRgba() +
      ',' +
      createRgba() +
      ');'
    )
  }
}

export const globalStyle = css(
  `
  body {
    background: #000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 18px;
    line-height: 1.45;
    `+ renderGradiant() +`
  }
  
  .right {
    animation: rotate-right linear 8s infinite;
  }
  
  .left {
    animation: rotate-left linear 8s infinite;
  }
  
  @keyframes rotate-right {
    100% { transform: rotate(360deg); }
  }
  
  @keyframes rotate-left {
    100% { transform: rotate(-360deg); }
  }
`
)
