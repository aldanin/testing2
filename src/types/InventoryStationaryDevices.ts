import * as Roseman from './RosemanTypes'

export default interface InventoryStationaryDevices {
  stationId: Roseman.RosemanID,
  stationName: string,
  devices: Roseman.StationaryDevice[],
  totalItems: number,
}
