import {
  breakpointsPreset,
  mapsPreset,
  scalesPreset,
  WrSystemTheme,
} from '@wheelroom/core'
import { fontMap } from './flow/font/font-map'

export const wrSystemTheme: WrSystemTheme = {
  ...breakpointsPreset,
  ...mapsPreset,
  ...scalesPreset,
  fontMap,
  colorMap: {},
}
