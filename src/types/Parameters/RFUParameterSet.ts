import ParameterSetBase from '../BaseTypes/ParameterSetBase'

export default interface RFUParameterSet extends ParameterSetBase {
  sendStat: boolean,
  statFrequencyMsec: number,
  useEncryption: number,
}
