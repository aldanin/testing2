import * as TaskStatusTheme from '../../../appWidgets/GenericColorThemes/TaskStatusColors'

export interface ThemeProps {
  textColor: string,
  subTextColor: string;
  tooltipHeaderBg: string;
  iconColor: string;
  taskStatusColors: TaskStatusTheme.TaskStatusColorsTheme
}

export const defaultTheme = {
  textColor: 'black',
  subTextColor: '#9fa1a2',
  tooltipHeaderBg: '#2e9ec3',
  iconColor: '#9fa1a2',
  taskStatusColors: TaskStatusTheme.TASK_STATUS_COLORS_DEFAULT_THEME
};
