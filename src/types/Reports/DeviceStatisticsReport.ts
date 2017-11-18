import StatisticsSummaryBase from './StatisticsSummaryBase'

export default interface DeviceStatisticsReport {
  summaries: StatisticsSummaryBase[],
  totalItems: number,
  pageNumber: number,
  pageSize: number,
}
