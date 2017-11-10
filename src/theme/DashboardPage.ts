import {
  TEXT_COLORS,
  BACKGROUND_COLORS,
} from './constants'
import { roundedCardBase } from './RoundedCard'
import { genericTextColors } from './GenericTextColors'
import { tabstrip } from './TabStrip'
import { graphicTimeline } from './GraphicTimeline'
import { taskStatusColors } from './TaskStatusColors'
import { statusCard } from './StatusCard'
import { dashboardSummaryView } from './DashboardSummary'
import {dashboardTasksView} from './DashboardTasks'
import {dashboardCalendarView} from './DashboardCalendar'


export const dashboardPage = {
  headerBackground: 'url(\'/images/login_background.png\') 0/cover',
  layoutBGColor: BACKGROUND_COLORS.B01,
  commonBorderColor: TEXT_COLORS.T09,
  genericTextColors: genericTextColors,
  summaryView: dashboardSummaryView,
  tasksView: dashboardTasksView,
  calendarView: dashboardCalendarView,
  mainTabstrip: tabstrip,
  roundedCard: roundedCardBase,
  statusCard: statusCard,
  graphicTimeline: graphicTimeline,
  taskStatusColors: taskStatusColors
}
