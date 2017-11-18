import StationaryDeviceBase from './StationaryDeviceBase'
import { RosemanID } from "./RosemanTypes";
import NozzleReader from './NozzleReader'

export default interface PumpData extends StationaryDeviceBase {
  id: RosemanID,
  pumoNo: number,
  nozzleReaders: NozzleReader[]
}
