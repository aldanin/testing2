import * as Enums from './Enums'
import StationaryDeviceBase from './StationaryDeviceBase'
import CVSParameterSet from './Parameters/CVSParameterSet'

export default interface InventoryCVSData extends StationaryDeviceBase {
  ironNumber: number,
  status: Enums.DeviceStatus,
  SAM1: Enums.SAMType,
  SAM2: Enums.SAMType,
  parameters: CVSParameterSet,
}
