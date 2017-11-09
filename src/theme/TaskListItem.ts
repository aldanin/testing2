import {
  TEXT_COLORS,
  BACKGROUND_COLORS
} from './constants'
import { CheckboxTheme } from './CheckBox'
import { genericTextColors } from './GenericTextColors';
import { taskStatusColors } from './TaskStatusColors'

export const taskListItem = {
  checkbox: CheckboxTheme,
  textColors: genericTextColors,
  runningTextColor: TEXT_COLORS.T06,
  rowEvenBgColor: BACKGROUND_COLORS.B16,
  rowOddBgColor: BACKGROUND_COLORS.B01,
  hoverOptionColor: TEXT_COLORS.T18,
  taskStatusTooltip: {
    textColor: genericTextColors.textColor,
    subTextColor: genericTextColors.textColorPale,
    tooltipHeaderBg: genericTextColors.textColor,
    iconColor: genericTextColors.textColorPale,
    taskStatusColors: taskStatusColors
  }
}

