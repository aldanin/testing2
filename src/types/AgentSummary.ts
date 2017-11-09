import * as TaskBasics from './TaskBasics'
import * as Agent from './Agent'

//
// Represents task run results aggregations according to specific time ranges (timeSlot):
//
export interface AgentSummary {
  agentId: Agent.AgentId
  timeSlot: TaskBasics.TimeSlotData,
  aborted?: number,
  failed?: number,
  partial?: number,
  completed?: number,
  running?: number,
  pending?: number,
  canceled?: number,
  scheduled?: number,
}

export const DEFAULT_AGENT_SUMMARY: AgentSummary = {
  agentId: '-1',
  timeSlot: TaskBasics.DEFAULT_TIME_SLOT,
  aborted: null,
  failed: null,
  partial: null,
  completed: null,
  running: null,
  pending: null,
  canceled: null,
  scheduled: null,
}
