import * as Enums from './Enums'
import StationaryDeviceBase from './StationaryDeviceBase'

export default interface RefuelData extends StationaryDeviceBase {
  NRIronNumber: number,
  idAttempt: number,
  idType: Enums.IDType,
  idHardware: Enums.IDHardware,
  tagId: number,
  batteryVoltage: number,
  vehicleRegistration: string,
  programmedId: number,
  odometerReading: number,
  engineHours: number,
  disconnectType: Enums.DisconnectType,
  refuelStartTime: string // time
  fuelType: Enums.FuelType
}
