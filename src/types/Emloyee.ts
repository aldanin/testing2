export type TargetId = string
export type AgentId = string

export interface AgentData {
  id: AgentId;
  name: string;
  parentId: TargetId;
  parentName: string;
}
