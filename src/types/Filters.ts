import * as RosemanTypes from './RosemanTypes'
import * as Enums from './Enums'

export interface FiltersData {
  dates?: Dates,
  sort?: Sort,
  page?: {
    pageNumber?: number,
    pageSize?: number,
    clientGuid?: RosemanTypes.ClientGuid,
  },
  logical?: {
    userId: RosemanTypes.RosemanID,
    filterName: string,
    filterFor: string,
    expressions: LogicalExpression[],
  }
}

export interface Dates {
  from: RosemanTypes.Date,
  to: RosemanTypes.Date,
}

export interface LogicalExpression {
  index: number,
  fieldName: string,
  operator: Enums.LogicOperation,
  value: any,
  andOr: Enums.AndOr,
}

export interface Sort {
  desc: boolean,
  sortByColumn: string,
}

export interface Page {
  pageNumber?: number,
  pageSize?: number,
  clientGuid?: RosemanTypes.ClientGuid,
}
