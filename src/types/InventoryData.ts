import { StationInventorySummary } from './StationInventorySummary'

export interface InventoryMain {
  stations: StationInventorySummary[],
  totalItems: number,
  pageNumber: number,
  pageSize: number,
}
