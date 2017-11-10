export type TargetId = string
export type AgentId = string

export interface AgentData {
  id: AgentId;
  name: string;
  targetId: TargetId;
  targetName: string;
}
