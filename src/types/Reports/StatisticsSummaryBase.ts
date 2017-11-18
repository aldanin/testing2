import StatisticsBase from './StatisticsBase'
import SummaryBase from '../SummaryBase'
import { Dates } from '../Filters'

export default interface StatisticsSummaryBase extends SummaryBase {
  deviceStatistics: StatisticsBase,
  dates: Dates,
}
