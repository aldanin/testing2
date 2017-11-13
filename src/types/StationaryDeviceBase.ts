import * as Roseman from './RosemanTypes'
import DeviceBase from './DeviceBase'

export default interface StationaryDeviceBase extends DeviceBase {
  name: string,
  HW: string,
  SW: string,
}
