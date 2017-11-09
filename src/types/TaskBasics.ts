//
// Represents common time spans (slots) in the application:
//
export type ServiceType = 'Google' | 'iCloud';// | 'All';
export type TimeSlotType = 'Day' | 'Week' | 'Month';

export interface TimeSlotData {
  rangeStart: number;
  rangeEnd: number;
}

export const DEFAULT_TIME_SLOT = {
  rangeStart: 0,
  rangeEnd: 0,
}
