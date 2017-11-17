import { InventoryMain } from './InventoryData'
import InventoryStationaryDevices from './InventoryStationaryDevices'

export const INVENTORY_MAIN_DEFAULT: InventoryMain = {
  stations: [],
  totalItems: 0,
  pageNumber: 0,
  pageSize: 0,
}

export const INVENTORY_NOZZLEREADERS_DEFAULT: InventoryStationaryDevices = {
  devices: [],
  stationId: 0,
  stationName: '',
  totalItems: 0,
}

