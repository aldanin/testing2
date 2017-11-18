import StationaryDeviceBase from "./StationaryDeviceBase";
import * as  RosemanTypes from './RosemanTypes'
import * as Enums from './Enums'
import NozzleReaderParameterSet from './Parameters/NozzleReaderParameterSet'

export default interface NozzleReader extends StationaryDeviceBase {
  pumpId: RosemanTypes.RosemanID,
  pumpNo: number,
  nozzleNo: number,
  ironNumber: number,
  parameters: NozzleReaderParameterSet,
  status: Enums.DeviceStatus
  firstUsage: string, // should be number
  lastReport: string, // should be number
  nozzleModelName: string,
  HWType: number,
  HWName: string,
  batteryVoltage: number,
  avarageDayUseSec: number,
  totalUsageTimeSec: number,
  refuels: number,
  fuelType: Enums.FuelType
}
