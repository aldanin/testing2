import {
} from './constants'
import { genericTextColors } from './GenericTextColors'
import { tasksList } from './TasksList'
import { taskStatusColors } from './TaskStatusColors'
import { agentDashboardControlStrip } from './DashboardControlStrip'

export const agentDashboardTasksView = {
  genericTextColors: genericTextColors,
  controlStrip: agentDashboardControlStrip,
  tasksList: tasksList,
  taskStatusColors: taskStatusColors,
}
