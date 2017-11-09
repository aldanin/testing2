import * as moment from 'moment'
import * as TaskBasics from '../types/TaskBasics'

let lastId = 0;
///////////////////////
// General functions:
///////////////////////
export const getId = (): string => (lastId++).toString();

export const randomInt = (max: number, min: number = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const randomBool = () =>
  !!Math.floor(Math.random() * 2);

// export const randDate = (seed: number = moment().valueOf(), isPrev = false) => {
//   const directionFactor = isPrev ? -1 : 1;
//
//   const limit = directionFactor > 0
//     ? moment(moment().valueOf()).add(3, 'months').valueOf()
//     : moment(moment().valueOf()).subtract(3, 'months').valueOf();
//   const otherLimit = directionFactor > 0 ? seed : limit;
//
//   const date = Math.floor(Math.random() * (directionFactor * (limit - seed) + 1) + otherLimit)
//   return date;
// }

export type MomentPeriod = 'hours' | 'days' | 'months';

export const randomDate = (seed: number,
                           periodCount: number,
                           periodUnit: MomentPeriod = 'months') => {

  const momentObj = seed ? moment(seed) : moment();
  const endDate = momentObj.add(periodCount, periodUnit).valueOf();
  const date = Math.floor(Math.random() * (endDate - seed + 1) + seed);
  return date;
}

export const randDateInSlot = (slotDate: number) => {
  return randomDate(slotDate, 6, 'hours');
}

export const randSlotNo = () => {
  return randomInt(3);
}

export const isInSlotRange = (time: number, slot: TaskBasics.TimeSlotData) => {
  return slot.rangeStart <= time && time < slot.rangeEnd;
}

export const taskNames = [
  'Photos on weekends',
  'Daily task',
  'Night chats with lover',
  'Sniffing porn',
  'Updating informer',
  'Kim Jon Un',
]

export const proxies = [
  '1.0.0.138',
  '1.0.0.9',
  '1.0.0.45',
]

////////////////
// Service type:
////////////////
export const createServiceType = () => {
  let serviceType: TaskBasics.ServiceType;
  switch (randomInt(1)) {
    case 0:
      serviceType = 'Google';
      break;
    case 1:
      serviceType = 'iCloud';
      break;
    default:
      break;
  }
  return serviceType;
}

export const randomDayOfWeek = () => {
  return randomInt(6);
}
