import * as RosemanTypes from './RosemanTypes'
import * as Enums from './Enums'

export default interface Filters {
  dates?: {
    from: RosemanTypes.Date,
    to: RosemanTypes.Date,
  },
  sort?: {
    desc: boolean,
    sortByColumn: string,
  },
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

export interface LogicalExpression {
  index: number,
  fieldName: string,
  operator: Enums.LogicOperation,
  value: any,
  andOr: Enums.AndOr,
}
