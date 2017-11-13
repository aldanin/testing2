// import * as NozzleReader from '../types/NozzleReader'
import * as Filters from '../types/Filters'
import { RosemanID } from "../types/RosemanTypes";

const DATA = {
  "stationId": null,
  "stationName": null,
  "devices": [{
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "RFUType": 2,
      "firstUsage": "2016-02-21T00:00:00",
      "ironNumber": 304051,
      "port": "1",
      "channel": null,
      "location": null,
      "parameters": {"sendStat": null, "statFrequencyMsec": null, "useEncryption": null, "id": 0},
      "name": null,
      "HW": "01",
      "SW": "0032",
      "faults": null,
      "id": 304051,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "RFUType": 1,
      "firstUsage": "2016-02-21T00:00:00",
      "ironNumber": 977433347,
      "port": "0",
      "channel": null,
      "location": null,
      "parameters": {"sendStat": null, "statFrequencyMsec": null, "useEncryption": null, "id": 0},
      "name": null,
      "HW": "01",
      "SW": "0106",
      "faults": null,
      "id": 977433347,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "RFUType": 2,
      "firstUsage": "2017-01-19T00:00:00",
      "ironNumber": 2132343809,
      "port": "1",
      "channel": null,
      "location": null,
      "parameters": {"sendStat": null, "statFrequencyMsec": null, "useEncryption": null, "id": 0},
      "name": null,
      "HW": "01",
      "SW": "0032",
      "faults": null,
      "id": 2132343809,
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

export const getNozzleReaderData = (stationId: RosemanID, filters: Filters.FiltersData) => {
  return DATA;
}
