import StatisticsBase from './StatisticsBase'

export default interface RFUStatistics extends StatisticsBase {
  lastReport: string,
  averageRSSIReceive: number,
  maxRSSIReceive: number,
  minRSSIReceive: number,
  averageRSSITransmit: number,
  maxRSSITransmit: number,
  minRSSITransmit: number,
  disconnectCount: number,
  HW: string,
  SW: string,
}
