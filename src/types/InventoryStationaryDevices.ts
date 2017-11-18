import * as Roseman from './RosemanTypes'
import DeviceSummaryBase from './DeviceSummaryBase'

export default interface InventoryStationaryDevices {
  devices: DeviceSummaryBase[],
  stationId: Roseman.RosemanID,
  stationName: string,
  totalItems: number,
}
