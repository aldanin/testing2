import ParameterSetBase from '../BaseTypes/ParameterSetBase'

export default interface NozzlereaderParameterSet extends ParameterSetBase {
  name: string,
  statusCallRefreshTime: number,
  checkEMUniversal: number,
  maxStartRetries: number,
  IDCheckRefreshTime: number,
  IDRetries: number,
  RFSleepTime: number,
  RFRetries: number,
}
