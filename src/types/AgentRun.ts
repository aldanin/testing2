import { AgentData } from './Agent';
import * as TaskBasics from './TaskBasics'

export type RecurrencePattern = 'Once' | 'Daily' | 'Weekly' | 'Monthly';
export type MonthlyRepeatBy = 'DayOfTheMonth' | 'DayOfTheWeek'; // relevant when RecurrencePattern is 'Monthly'

//
// Specific AgentRun data structure:
//
export interface AgentRunData {
  id: string;
  name: string;
  agent: AgentData;
  service: TaskBasics.ServiceType;
  subServices: GoogleSubServiceSwitches | CloudSubServiceSwitches;
  proxy: string;
  recurrence: RecurrenceDataBasic; // {RecurrenceDataOnce | RecurrenceDataDaily |
  // RecurrenceDataWeekly | RecurrenceDataMonthly}
  activityPattern: SlotActivity[];
}

//
// Represents data structure for activity pattern components (see Agent-Control editors):
//
export interface SlotActivity  {
  slot: TaskBasics.TimeSlotData,
  strength: number
}

//
// Represents sub-service switches:
//

export interface GoogleSubServiceSwitches {
  gmail: {
    active: boolean;
    inbox: boolean;
    sent: boolean;
    drafts: boolean;
    attachments: boolean;
    amountOfEmails: boolean;
    timeRange: boolean;
  };
  bookmarks: boolean;
  contacts: boolean;
  googlePlus: boolean;
  profile: boolean;
  search: boolean;
  drive: boolean;
  locations: boolean;
  keep: boolean;
  photos: boolean;
  passwords: boolean;
  hangouts: boolean;
  group: boolean;
}

export interface CloudSubServiceSwitches {
  whatsApp: {
    active: boolean;
    messages: boolean;
    media: boolean;
  };
  contacts: boolean;
  calendars: boolean;
  completeDeviceBackup: boolean;
}

//
// values in this interface are exclusive - only 1 is selected, the others are null:
//
export interface RunEndOptions {
  isNever: boolean,
  afterOccurrences: number, // e.g. stop task after 2 occurrences
  specificDate: number
}
//
// Represents (editable) common Agent-Control recurrence data fields
//
export interface RecurrenceDataBasic {
  pattern: RecurrencePattern,
  timeSlots: TaskBasics.TimeSlotData[], // These depend on recurrence value
  repeatEvery: number, // e.g. with recurrence == Weekly => every 2 weeks //ONCE
  runEndOptions: RunEndOptions, // Depends on recurrence value //ONCE
  startsTimestamp: number, // Can be the exact date to start when no recurrence is chosen //ONCE
}
//
// Specific pattern recurrence interfacse:
//
export interface RecurrenceDataOnce extends RecurrenceDataBasic {
  pattern: 'Once',
  startsTimestamp: null,
  repeatEvery: null,
  runEndOptions: null,
}

export interface RecurrenceDataDaily extends RecurrenceDataBasic {
  pattern: 'Daily',
}

export interface RecurrenceDataWeekly extends RecurrenceDataBasic {
  pattern: 'Weekly',
  timesPerWeek: number,
}

export interface RecurrenceDataMonthly extends RecurrenceDataBasic {
  pattern: 'Monthly',
  repeatBy: MonthlyRepeatBy,
}
