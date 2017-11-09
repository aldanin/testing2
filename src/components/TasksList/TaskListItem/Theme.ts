import * as CheckboxTheme from '../../../appWidgets/Checkbox/Theme'
import * as GenericTextColorsTheme from '../../../appWidgets/GenericColorThemes/GenericTextColors'
import * as TaskStatusColors from '../../../appWidgets/GenericColorThemes/TaskStatusColors'

export interface ThemeProps {
  textColors: GenericTextColorsTheme.GenericTextColorsTheme
  checkbox: CheckboxTheme.CheckboxThemeProps
  runningTextColor: string,
  rowEvenBgColor: string;
  rowOddBgColor: string;
  hoverOptionColor: string;
  taskStatusTooltip: {
    textColor: string,
    subTextColor: string,
    tooltipHeaderBg: string,
    iconColor: string,
    taskStatusColors: TaskStatusColors.TaskStatusColorsTheme
  }
}

export const DEFAULT_THEME: ThemeProps = {
  textColors: GenericTextColorsTheme.THEME_DEFAULT,
  checkbox: CheckboxTheme.DEFAULT_THEME,
  runningTextColor: 'blue',
  rowEvenBgColor: '#f6fcfe',
  rowOddBgColor: '#ffffff',
  hoverOptionColor: '#627892',
  taskStatusTooltip: {
    textColor: GenericTextColorsTheme.THEME_DEFAULT.textColor,
    subTextColor: GenericTextColorsTheme.THEME_DEFAULT.textColorPale,
    tooltipHeaderBg: GenericTextColorsTheme.THEME_DEFAULT.textColor,
    iconColor: GenericTextColorsTheme.THEME_DEFAULT.textColorPale,
    taskStatusColors: TaskStatusColors.TASK_STATUS_COLORS_DEFAULT_THEME
  }
}
