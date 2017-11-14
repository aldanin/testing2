import * as Filters from '../types/Filters'
import * as RosemamTypes from '../types/RosemanTypes'

export interface ApiQueryParams {
  sid?: string
  filters?: Filters.FiltersData
}

export interface ProductMeta {
  productId?: string
  productType?: string
}

export interface InventoryDeviceApiQuery extends ApiQueryParams {
  stationId: RosemamTypes.RosemanID,
  deviceType: string,
}

// export interface ProductApiQuery extends ApiQueryParams {
//   filters?: any, // TODO: use some sort of Filters interface
// }
