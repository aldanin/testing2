import * as AgentSummary from '../types/AgentSummary'
import * as Agents from '../types/Agent'
import * as Tasks from '../types/Task'
import * as TasksMock from './Tasks'
import * as TaskBasics from '../types/TaskBasics'
import * as CommonFunctions from './CommonFunctions'
import * as moment from 'moment'

const getTaskSummaryByFieldAndSlot = (tasks: Tasks.Task[],
                                      timeSlot: TaskBasics.TimeSlotData,
                                      field: Tasks.TaskStatus,
                                      completedField: Tasks.CompleteStatus = null) => {
  return tasks.filter(task =>
    CommonFunctions.isInSlotRange(
      task.startTimestamp, timeSlot) &&
    task.status === field &&
    task.complete === completedField).length;
}

/////////////////// Getters  ////////////
export const getAgentSummary = (agentId: Agents.AgentId) => {
  const timeSlot: TaskBasics.TimeSlotData = {
    rangeStart: moment().startOf('day').subtract(0, 'days').add(6, 'hours').valueOf(),
    rangeEnd: moment().startOf('day').subtract(0, 'days').add(12, 'hours').valueOf(),
  }
  const tasks = TasksMock.getTasksByAgentId(agentId, timeSlot)
  const agentSummary: AgentSummary.AgentSummary = {
    agentId: agentId,
    timeSlot: timeSlot,
    aborted: getTaskSummaryByFieldAndSlot(tasks, timeSlot, 'Aborted'),
    failed: getTaskSummaryByFieldAndSlot(tasks, timeSlot, 'Completed', 'Failed'),
    partial: getTaskSummaryByFieldAndSlot(tasks, timeSlot, 'Completed', 'Partial'),
    completed: getTaskSummaryByFieldAndSlot(tasks, timeSlot, 'Completed', 'Success'),
    running: getTaskSummaryByFieldAndSlot(tasks, timeSlot, 'Running'),
    pending: getTaskSummaryByFieldAndSlot(tasks, timeSlot, 'Pending'),
    canceled: getTaskSummaryByFieldAndSlot(tasks, timeSlot, 'Canceled'),
    scheduled: getTaskSummaryByFieldAndSlot(tasks, timeSlot, 'Scheduled'),
  }

  return agentSummary;
}

// export const MOCK_AGENT_SUMMARY: AgentSummary.AgentSummary = {
//   agentId: '10',
//   timeSlot: timeSlot,
//   aborted: 0,
//   failed: 4,
//   partial: 3,
//   completed: 14,
//   running: 12,
//   pending: 3,
//   canceled: 6,
//   scheduled: 10,
// }
