import * as Roseman from './RosemanTypes'

export interface InventoryStationaryDevices {
  stationId: Roseman.rosemanId,
  stationName: string,
  devices: any[],
  totalItems: number,
}
