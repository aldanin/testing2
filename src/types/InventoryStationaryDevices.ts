import * as Roseman from './RosemanTypes'
// import SummaryBase from './SummaryBase'

export default interface InventoryStationaryDevices {
  stationId: Roseman.RosemanID,
  stationName: string,
  devices: any[],
  totalItems: number,
}
