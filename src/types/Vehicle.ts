import * as Enums from './Enums'
import StationaryDeviceBase from './StationaryDeviceBase'

export default interface VehicleData extends StationaryDeviceBase {
  tagId: number,
  vehicleRegistration: string,
  odometerSoftwareVersion: string,
  odometerHardwareVersion: string,
  odometerIronNumber: number,
  SVIDBatteryVoltage: number,
  idType: Enums.IDType
}
