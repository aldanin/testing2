import { RosemanID } from "./RosemanTypes";
import DeviceBase from './DeviceBase'
import FaultBaseData from './BaseTypes/FaultBase'

export default interface StationFaultData {
  id: RosemanID,
  customerId: RosemanID,
  faultDefinition: FaultBaseData,
  device: DeviceBase,
  dateReported: string // date
}
