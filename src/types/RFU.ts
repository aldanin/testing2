import StationaryDeviceBase from "./StationaryDeviceBase";
import * as Enums from './Enums'

export default interface RFU extends StationaryDeviceBase {
  RFUType: Enums.RFUType,
  firstUsage: string, // should be number
  lastReport: string, // should be number
  ironNumber: number,
  channel: number,
  port: string,
  location: string,
  parameters: any // deprecated for now
}
