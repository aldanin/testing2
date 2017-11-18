import * as TabstripComponentTheme from '../../../appWidgets/TabstripComponent/Theme'
import * as DashboardSummaryViewTheme from '../../DashboardSummaryView/Theme'
import * as DashboardTasksViewTheme from '../../DashboardTasksView/Theme'
import * as DashboardCalendarViewTheme from '../../DashboardCalendarView/Theme'
import * as StatusCardTheme from '../../../appWidgets/StatusCard/Theme'
import * as WidgetThemes from '../../../appWidgets/GenericColorThemes/TaskStatusColors'

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
  summaryView: DashboardSummaryViewTheme.ThemeProps,
  tasksView: DashboardTasksViewTheme.ThemeProps,
  calendarView: DashboardCalendarViewTheme.ThemeProps,
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
  summaryView: DashboardSummaryViewTheme.DEFAULT_THEME,
  tasksView: DashboardTasksViewTheme.DEFAULT_THEME,
  calendarView: DashboardCalendarViewTheme.DEFAULT_THEME,
  statusCard: StatusCardTheme.DEFAULT_THEME,
  taskStatusColors: WidgetThemes.TASK_STATUS_COLORS_DEFAULT_THEME
};
