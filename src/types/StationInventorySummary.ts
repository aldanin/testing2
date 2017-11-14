import * as Roseman from './RosemanTypes'
import InventoryStationaryDevices from './InventoryStationaryDevices'

export interface StationInventorySummary {
  id: Roseman.RosemanID,
  customerId:  Roseman.RosemanID,
  customerName: string,
  stationId: Roseman.RosemanID,
  stationName: string,
  NRCount: number,
  RFU_z: number,
  RFU_FHS: number,
  refuels: number,
  pauses: number,
  pausesRefuelRatio: number,
  averageRefuelTimeSec: number,
  maxNRUsageSec: number,
  averageNRUsageSec: number,
  systemVersion: string,
  avarageDayUseSec: number,
  averageRefuelCount_Day: number,
  lastReportTime: Roseman.Date,
  HWVersion: string,
  devices?: {
    NozzleReader?: InventoryStationaryDevices,
    RFU?: InventoryStationaryDevices,
    CVS?: InventoryStationaryDevices,
  }
}
