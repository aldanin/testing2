import * as Filters from '../types/Filters'

export interface ApiQueryParams {
  sid?: string
  filters?: Filters.FiltersData
}

export interface ProductMeta {
  productId?: string
  productType?: string
}

// export interface ProductApiQuery extends ApiQueryParams {
//   filters?: any, // TODO: use some sort of Filters interface
// }
