import * as TasksListTheme from '../TasksList/Theme'
import * as TaskStatusTheme from '../../appWidgets/GenericColorThemes/TaskStatusColors'
import * as AgentDashboardControlStripTheme from '../AgentDashboardControlStrip/Theme'

export const CARD_DEFAULT_BG_COLOR = 'white';

export interface TaskSummaryColors {
  color: string,
  borderTopColor?: string,
  backgroundColor?: string,
}

export interface ThemeProps {
  genericTextColors: {
    textColor: string,
    textColorLink: string,
    textColorPale: string,
    borderColor: string,
  },
  controlStrip: AgentDashboardControlStripTheme.ThemeProps,
  tasksList: TasksListTheme.ThemeProps,
  taskStatusColors: TaskStatusTheme.TaskStatusColorsTheme,
}

export const DEFAULT_THEME: ThemeProps = {
  genericTextColors: {
    textColorLink: 'black',
    textColorPale: '#9fa1a2',
    textColor: '#263238',
    borderColor: '#E9EDF6',
  },
  controlStrip: AgentDashboardControlStripTheme.DEFAULT_THEME,
  tasksList: TasksListTheme.DEFAULT_THEME,
  taskStatusColors: TaskStatusTheme.TASK_STATUS_COLORS_DEFAULT_THEME,
};
