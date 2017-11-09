import {
  TEXT_COLORS,
} from './constants'
import { roundedCardBase } from './RoundedCard'
import { genericTextColors } from './GenericTextColors'
import { agentDashboardControlStrip } from './AgentDashboardControlStrip'
import { graphicTimeline } from './GraphicTimeline'
import { taskStatusColors } from './TaskStatusColors'
import { dateChooserTheme } from './DateChooser'

export const agentDashboardCalendarView = {
  genericTextColors: genericTextColors,
  controlStrip: agentDashboardControlStrip,
  roundedCard: roundedCardBase,
  graphicTimeline: graphicTimeline,
  taskStatusColors: taskStatusColors,
  dateChooser: dateChooserTheme,
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
  },
  grid: {
    header: {
      color: genericTextColors.textColorPale,
    },
    body: {
      color: genericTextColors.textColor,
      rowTitleColor:  genericTextColors.textColorPale,
    }
  }
}

