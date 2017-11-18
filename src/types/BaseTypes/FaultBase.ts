import { RosemanID } from "../RosemanTypes";
import * as Enums from '../Enums'

export default interface FaultBaseData {
  deviceId: RosemanID,
  deviceType: string,
  type: Enums.FaultType,
  value: number,
  date: string // date
}
