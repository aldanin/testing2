import * as RosemanTypes from '../RosemanTypes'
import DeviceBase from '../DeviceBase'

export default interface StatisticsBase extends DeviceBase {
  deviceId: RosemanTypes.RosemanID,
}
