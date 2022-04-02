import { isBrowser } from './is-browser'

const generateColorCode = () => Math.round(Math.random() * 255)

const createRgba = () => {
  return `rgba(${generateColorCode()}, ${generateColorCode()}, ${generateColorCode()}, 1)`
}

export const renderGradiant = (fallbackColor = '#000') => {
  if (isBrowser) {
    return `radial-gradient(68.13% 100% at 100% 0, ${createRgba()},rgba(0,0,0,0) 100%), linear-gradient(95.52deg,#000,rgba(0,0,0,0)), linear-gradient(95.52deg, ${createRgba()}, ${createRgba()})`
  }
  return fallbackColor
}
