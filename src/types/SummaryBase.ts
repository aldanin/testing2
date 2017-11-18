import * as RosemanTypes from './RosemanTypes'
import StationaryDeviceBase from './StationaryDeviceBase'

export default interface SummaryBase {
  customerId: RosemanTypes.RosemanID,
  customerName: number,
  stationId: RosemanTypes.RosemanID,
  stationName: string,
  device: StationaryDeviceBase
}
