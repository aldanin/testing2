import * as RosemanTypes from './RosemanTypes'

export default interface DeviceBase {
  id: RosemanTypes.RosemanID,
  stationId: RosemanTypes.RosemanID,
  customerId: RosemanTypes.RosemanID,
}
