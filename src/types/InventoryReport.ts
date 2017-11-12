import { StationInventorySummary } from './StationInventorySummary'

export interface InventoryReport {
  stations: StationInventorySummary[],
  totalItems: number,
  pageNumber: number,
  pageSize: number,
}
