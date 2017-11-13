import * as Roseman from './RosemanTypes'

export interface InventoryStationaryDevices {
  stationId: Roseman.RosemanID,
  stationName: string,
  devices: any[],
  totalItems: number,
}
