import * as TabstripComponentTheme from '../../appWidgets/TabstripComponent/Theme'
import * as AgentDashboardSummaryViewTheme from '../AgentDashboardSummaryView/Theme'
import * as AgentDashboardTasksViewTheme from '../AgentDashboardTasksView/Theme'
import * as AgentDashboardCalendarViewTheme from '../AgentDashboardCalendarView/Theme'
import * as StatusCardTheme from '../../appWidgets/StatusCard/Theme'
import * as WidgetThemes from '../../appWidgets/GenericColorThemes/TaskStatusColors'

export interface ThemeProps {
  headerBackground: string,
  layoutBGColor: string,
  commonBorderColor: string,
  genericTextColors: {
    textColor: string,
    textColorLink: string,
    textColorPale: string,
    borderColor: string,
  },

  mainTabstrip: TabstripComponentTheme.TabsThemeProps,
  summaryView: AgentDashboardSummaryViewTheme.ThemeProps,
  tasksView: AgentDashboardTasksViewTheme.ThemeProps,
  calendarView: AgentDashboardCalendarViewTheme.ThemeProps,
  statusCard: StatusCardTheme.StatusCardThemeProps,
  taskStatusColors: WidgetThemes.TaskStatusColorsTheme
}

export const DEFAULT_THEME: ThemeProps = {
  headerBackground: '#e8f0f5',
  layoutBGColor: 'white',
  commonBorderColor: 'silver',
  genericTextColors: {
    textColorLink: 'black',
    textColorPale: '#9fa1a2',
    textColor: '#263238',
    borderColor: '#E9EDF6',
  },
  mainTabstrip: TabstripComponentTheme.DEFAULT_THEME,
  summaryView: AgentDashboardSummaryViewTheme.DEFAULT_THEME,
  tasksView: AgentDashboardTasksViewTheme.DEFAULT_THEME,
  calendarView: AgentDashboardCalendarViewTheme.DEFAULT_THEME,
  statusCard: StatusCardTheme.DEFAULT_THEME,
  taskStatusColors: WidgetThemes.TASK_STATUS_COLORS_DEFAULT_THEME
};
