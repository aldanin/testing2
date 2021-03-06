import {
  TEXT_COLORS,
} from './constants'
import { roundedCardBase } from './RoundedCard'
import { genericTextColors } from './GenericTextColors'
import { graphicTimeline } from './GraphicTimeline'
import { taskStatusColors } from './TaskStatusColors';
import { dashboardControlStrip } from './DashboardControlStrip'

export const dashboardSummaryView = {
  genericTextColors: genericTextColors,
  controlStrip: dashboardControlStrip,
  roundedCard: roundedCardBase,
  graphicTimeline: graphicTimeline,
  taskStatusColors: taskStatusColors,
  taskBarChart: {
    barColors: {
      aborted: '#6b7080',
      success: '#76ae37',
      partial: '#d9a20e',
      failed: '#cb3b39',
      pending: TEXT_COLORS.T17,
      scheduled: TEXT_COLORS.T17,
      canceled: 'gray',
    }
  }
}
