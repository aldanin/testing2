import ParameterSetBase from '../BaseTypes/ParameterSetBase'
import { RosemanID } from "../RosemanTypes";
import * as Enums from '../Enums'

export default interface CVSParameterSet extends ParameterSetBase {
  RFCIP: string,
  stationId: RosemanID,
  customerCode: number,
  customerParameter: number,
  lowNRVoltage: number,
  lowSVIDVoltage: number,
  TTLOdometer: string,
  validationMethod: Enums.ValidationMethod,
}
