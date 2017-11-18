import { RosemanID } from "./RosemanTypes";
import PumpData from './Pump'
import StationaryDeviceBase from './StationaryDeviceBase'

export default interface StationData {
  name: string,
  stationId: RosemanID,
  customerId: RosemanID,
  pumps: PumpData[],
  devices: StationaryDeviceBase[],
  systemVersion: string
}
