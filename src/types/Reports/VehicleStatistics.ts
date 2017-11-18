import StatisticsBase from './StatisticsBase'

export default interface VehicleStatistics extends StatisticsBase {
  firstTagUsage: string, // date
  firstOdometerUsage: string // date
  lastRefuel: string, //date
  lastOdometerDetected: string, // date
  numberOfRefuels: number,
  numberOfRefuelsWithOdometerDetections: number,
  numberOfRefuelsWithoutOdometerDetections: number,
  NumberOfPauses: number,
  numberOfRefuelsWithPauses: number,
  averageRefuelsTimeSec: Number,
  odometerReading: number,
  engineHourReading: number
}
