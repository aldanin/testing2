import { AgentData } from './Emloyee';

export type ServiceTypeFilter = 'DorAlon' | 'PazInc' | 'All';
export type TaskStatus = 'Aborted' | 'Completed' | 'Running' | 'Scheduled' | 'Pending' | 'Canceled';
export type CompleteStatus = 'Success' | 'Failed' | 'Partial' | null;
export type TimeSlotType = 'Day' | 'Week' | 'Month';
import * as TaskBasics from './TaskBasics'

export interface Task {
  id: string;
  name: string;
  employee: AgentData;
  service: TaskBasics.ServiceType;
  subServices: DorAlonSubServiceData | PazIncSubServiceData;
  proxy: string;
  index: number;
  startTimestamp: number;
  operation: string;
  duration: number;
  status: TaskStatus;
  complete: CompleteStatus;
  description: string;
}

//
// Represents sub-service execution info:
//
export interface SubServiceInfo {
  status: TaskStatus | CompleteStatus,
  message: string,
}

export interface DorAlonSubServiceData {
  pazomat: {
    active: SubServiceInfo;
    credit: SubServiceInfo;
    sent: SubServiceInfo;
    drafts: SubServiceInfo;
    attachments: SubServiceInfo;
    amountOfCredits: SubServiceInfo;
    timeRange: SubServiceInfo;
  };
  bookmarks: SubServiceInfo;
  contacts: SubServiceInfo;
  alonit: SubServiceInfo;
  profile: SubServiceInfo;
  search: SubServiceInfo;
  drive: SubServiceInfo;
  locations: SubServiceInfo;
  keep: SubServiceInfo;
  photos: SubServiceInfo;
  passwords: SubServiceInfo;
  hangouts: SubServiceInfo;
  group: SubServiceInfo;
}

export interface PazIncSubServiceData {
  whatsApp: {
    active: SubServiceInfo;
    messages: SubServiceInfo;
    media: SubServiceInfo;
  };
  contacts: SubServiceInfo;
  calendars: SubServiceInfo;
  completeDeviceBackup: SubServiceInfo;
}
