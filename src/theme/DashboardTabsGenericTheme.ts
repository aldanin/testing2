import {
  TEXT_COLORS,
  BACKGROUND_COLORS,
} from './constants'
import { genericElementColors } from './GenericElementColors'

export const selectorTabsTheme = {
  activeBgColor: BACKGROUND_COLORS.B01,
  activeTextColor: TEXT_COLORS.T17,
  activeBorderColor: TEXT_COLORS.T17,
  disActiveBgColor: BACKGROUND_COLORS.B01,
  disActiveTextColor: TEXT_COLORS.T17,
  disActiveBorderColor: 'transparent',
  shadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  genericElementColors: genericElementColors,
}
