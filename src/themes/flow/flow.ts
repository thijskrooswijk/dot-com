import { SectionWheelTheme } from '@wheelroom/core'
import { wrSystemTheme } from '../wr-system-theme'
import { elementNcss } from './element-ncss/element-ncss'
import { styles } from './ncss-trees/styles'
import { light } from './colors/light'
import { data } from './data/data'

export const flowLight: SectionWheelTheme = {
  themeName: 'Flow light',
  elementNcss,
  styles,
  data,
  wrSystemTheme: { ...wrSystemTheme, colorMap: light },
}
