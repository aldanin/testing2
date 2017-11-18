import * as Roseman from './RosemanTypes'
import FaultBase from './BaseTypes/FaultBase'

export interface StationSummary {
  stationId: Roseman.RosemanID,
  name: string,
  customerName: string,
  faults: FaultBase[]
}
