import * as RosemanTypes from './RosemanTypes'

export default interface DeviceSummaryBase {
  id: RosemanTypes.RosemanID,
  stationId: RosemanTypes.RosemanID,
  customerId: RosemanTypes.RosemanID,
  customerName: string,
  stationName: string,
  device: RosemanTypes.StationaryDevice
}
