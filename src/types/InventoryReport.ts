import { StationInventorySummary } from './StationInventorySummary'

export default interface InventoryReport {
  stations: StationInventorySummary[],
  totalItems: number,
  pageNumber: number,
  pageSize: number,
}
