// import * as NozzleReader from '../types/NozzleReader'
import * as Filters from '../types/Filters'
import { RosemanID } from "../types/RosemanTypes";

const DATA = {
  "stationId": 405,
  "stationName": "אשקלון",
  "deviceType": "CVS",
  "devices": [{
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "ironNumber": 0,
      "status": 0,
      "SAM1": 0,
      "SAM2": 0,
      "parameters": {
        "RFCIP": null,
        "stationId": 405,
        "customerCode": 3,
        "customerParameter": null,
        "lowNRVoltage": 0.0,
        "lowSVIDVoltage": 0.0,
        "TTLOdometer": null,
        "validationMethod": 0,
        "id": 0
      },
      "name": null,
      "HW": null,
      "SW": null,
      "faults": null,
      "id": 42,
      "stationId": 405,
      "customerId": 3
    }
  }],
  "totalItems": 0
}

// DATA.stations.forEach(station => {
//   station.devices = {
//     nozzleReader: [],
//     RFU: [],
//     CVS: [],
//   }
// })

export const getCVSData = (stationId: RosemanID, filters: Filters.FiltersData) => {
  return DATA;
}
