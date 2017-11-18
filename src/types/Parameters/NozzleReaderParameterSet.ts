import ParameterSetBase from '../BaseTypes/ParameterSetBase'

export default interface NozzleReaderParameterSet extends ParameterSetBase {
  name: string,
  statusCallRefreshTime: number,
  checkEMUniversal: number,
  maxStartRetries: number,
  IDCheckRefreshTime: number,
  IDRetries: number,
  RFSleepTime: number,
  RFRetries: number,
}
