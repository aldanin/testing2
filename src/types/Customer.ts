import * as Enums from './Enums'
import StationaryDeviceBase from './StationaryDeviceBase'
import { RosemanID } from "./RosemanTypes";
import StationData from './Station'

export default interface CustomerData extends StationaryDeviceBase {
  id: RosemanID,
  name: string,
  stations: StationData[],
  hasStations: boolean,
  icon: string,
}
