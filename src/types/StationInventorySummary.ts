import * as Roseman from './RosemanTypes'

export interface StationInventorySummary {
  id: Roseman.rosemanId,
  customerId:  Roseman.rosemanId,
  customerName: string,
  stationId: Roseman.rosemanId,
  stationName: string,
  NRCount: number,
  RFU_z: number,
  RFU_FHS: number,
  refuels: number,
  Pauses: number,
  pausesRefuelRatio: number,
  averageRefuelTimeSec: number,
  maxNRUsageSec: number,
  systemVersion: string,
  avarageDayUseSec: number,
  averageRefuelCount_Day: number,
  lastReportTime: number // Server sends date string,
  HWVersion: string,
}
