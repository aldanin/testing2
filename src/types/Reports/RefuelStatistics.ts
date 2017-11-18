import StatisticsBase from './StatisticsBase'

export default interface RefuelStatistics extends StatisticsBase {
  firstIDAttempt: number,
  CVSResponseAttempt: number,
  refuelDurationSec: number,
  RFReceiveAttemptCount: number,
  RFTransmitCount: number,
  RFSuccessfulTransitions: number,
  numberOfTagReadingAttempts: number,
  numberOfSuccessfulReadingAttempts: number,
  numberOfPauses: number,
  numberOfRefuelsWithPauses: number,
  averageRSSIReceive: number,
  maxRSSIReceive: number,
  minRSSIReceive: number,
  averageRSSITransmit: number,
  maxRSSITransmit: number,
  minRSSITransmit: number,
  tagPausesCount: number,
  radioPausesCount: number
}
