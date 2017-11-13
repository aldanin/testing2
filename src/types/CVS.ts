import * as Enums from './Enums'
import StationaryDeviceBase from './StationaryDeviceBase'

export default interface InventoryCVSData extends StationaryDeviceBase {
  ironNumber: number,
  status: Enums.DeviceStatus,
  SAM1: Enums.SAMType,
  SAM2: Enums.SAMType,
  parameters: any, // deprecated for now
}
