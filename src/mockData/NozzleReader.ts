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
      "pumpId": 0,
      "pumpNo": 0,
      "nozzleNo": 0,
      "ironNumber": 2093,
      "parameters": null,
      "status": 0,
      "tamperStatus": 2,
      "firstUsage": "2016-03-08T00:00:00",
      "lastReport": "2016-03-08T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 0.000,
      "avarageDayUseSec": 0,
      "totalUsageTimeSec": 0,
      "refuels": 0,
      "fuelType": 0,
      "name": null,
      "HW": "",
      "SW": "",
      "faults": null,
      "id": 2093,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 8,
      "pumpNo": 8,
      "nozzleNo": 1,
      "ironNumber": 2179,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2016-02-07T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 94,
      "totalUsageTimeSec": 103765,
      "refuels": 1094,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 2179,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 1,
      "pumpNo": 1,
      "nozzleNo": 1,
      "ironNumber": 2189,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2016-02-21T00:00:00",
      "lastReport": "2017-03-24T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.500,
      "avarageDayUseSec": 112,
      "totalUsageTimeSec": 48041,
      "refuels": 426,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "140A",
      "faults": null,
      "id": 2189,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 1,
      "pumpNo": 1,
      "nozzleNo": 1,
      "ironNumber": 100095,
      "parameters": null,
      "status": 0,
      "tamperStatus": 2,
      "firstUsage": "2016-02-16T00:00:00",
      "lastReport": "2017-01-17T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 98,
      "totalUsageTimeSec": 215665,
      "refuels": 2186,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1409",
      "faults": null,
      "id": 100095,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 1,
      "pumpNo": 1,
      "nozzleNo": 1,
      "ironNumber": 100106,
      "parameters": null,
      "status": 0,
      "tamperStatus": 1,
      "firstUsage": "2016-02-21T00:00:00",
      "lastReport": "2016-03-01T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 0.000,
      "avarageDayUseSec": 77,
      "totalUsageTimeSec": 1544,
      "refuels": 20,
      "fuelType": 0,
      "name": null,
      "HW": "",
      "SW": "",
      "faults": null,
      "id": 100106,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 1,
      "pumpNo": 1,
      "nozzleNo": 1,
      "ironNumber": 100202,
      "parameters": null,
      "status": 0,
      "tamperStatus": 2,
      "firstUsage": "2016-03-10T00:00:00",
      "lastReport": "2017-07-03T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.700,
      "avarageDayUseSec": 93,
      "totalUsageTimeSec": 141405,
      "refuels": 1513,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "140E",
      "faults": null,
      "id": 100202,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 1,
      "pumpNo": 1,
      "nozzleNo": 1,
      "ironNumber": 100222,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2016-02-28T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 86,
      "totalUsageTimeSec": 52904,
      "refuels": 609,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "140E",
      "faults": null,
      "id": 100222,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 1,
      "pumpNo": 1,
      "nozzleNo": 3,
      "ironNumber": 100604,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2016-03-15T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 105,
      "totalUsageTimeSec": 234684,
      "refuels": 2230,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 100604,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 1,
      "pumpNo": 1,
      "nozzleNo": 1,
      "ironNumber": 100724,
      "parameters": null,
      "status": 0,
      "tamperStatus": 2,
      "firstUsage": "2016-03-20T00:00:00",
      "lastReport": "2017-11-02T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.500,
      "avarageDayUseSec": 90,
      "totalUsageTimeSec": 32111,
      "refuels": 356,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 100724,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 1,
      "pumpNo": 1,
      "nozzleNo": 1,
      "ironNumber": 100735,
      "parameters": null,
      "status": 0,
      "tamperStatus": 2,
      "firstUsage": "2016-03-20T00:00:00",
      "lastReport": "2017-02-02T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 88,
      "totalUsageTimeSec": 5207,
      "refuels": 59,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "140E",
      "faults": null,
      "id": 100735,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 1,
      "pumpNo": 1,
      "nozzleNo": 1,
      "ironNumber": 100987,
      "parameters": null,
      "status": 0,
      "tamperStatus": 2,
      "firstUsage": "2017-02-02T00:00:00",
      "lastReport": "2017-02-27T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 99,
      "totalUsageTimeSec": 10345,
      "refuels": 104,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "140E",
      "faults": null,
      "id": 100987,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 6,
      "pumpNo": 6,
      "nozzleNo": 3,
      "ironNumber": 101567,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2017-08-28T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 135,
      "totalUsageTimeSec": 10011,
      "refuels": 74,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 101567,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 4,
      "pumpNo": 4,
      "nozzleNo": 3,
      "ironNumber": 101570,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2017-08-28T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 160,
      "totalUsageTimeSec": 40241,
      "refuels": 250,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 101570,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 2,
      "pumpNo": 2,
      "nozzleNo": 1,
      "ironNumber": 101571,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2017-08-27T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 100,
      "totalUsageTimeSec": 47853,
      "refuels": 474,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 101571,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 5,
      "pumpNo": 5,
      "nozzleNo": 3,
      "ironNumber": 101582,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2017-08-28T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 137,
      "totalUsageTimeSec": 24733,
      "refuels": 180,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 101582,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 4,
      "pumpNo": 4,
      "nozzleNo": 1,
      "ironNumber": 101583,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2017-08-28T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 97,
      "totalUsageTimeSec": 19975,
      "refuels": 205,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 101583,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 3,
      "pumpNo": 3,
      "nozzleNo": 1,
      "ironNumber": 101598,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2017-08-28T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 106,
      "totalUsageTimeSec": 39673,
      "refuels": 374,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 101598,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 2,
      "pumpNo": 2,
      "nozzleNo": 3,
      "ironNumber": 101601,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2017-08-27T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 132,
      "totalUsageTimeSec": 65505,
      "refuels": 493,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 101601,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 3,
      "pumpNo": 3,
      "nozzleNo": 3,
      "ironNumber": 101626,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2017-08-27T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 148,
      "totalUsageTimeSec": 58733,
      "refuels": 396,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 101626,
      "stationId": 405,
      "customerId": 3
    }
  }, {
    "customerId": 3,
    "customerName": null,
    "stationId": 405,
    "stationName": "אשקלון",
    "device": {
      "pumpId": 7,
      "pumpNo": 7,
      "nozzleNo": 1,
      "ironNumber": 101694,
      "parameters": null,
      "status": 0,
      "tamperStatus": 0,
      "firstUsage": "2017-08-28T00:00:00",
      "lastReport": "2017-11-12T00:00:00",
      "nozzleModelName": null,
      "HWType": 0,
      "HWName": null,
      "batteryVoltage": 3.600,
      "avarageDayUseSec": 136,
      "totalUsageTimeSec": 24251,
      "refuels": 178,
      "fuelType": 0,
      "name": null,
      "HW": "05",
      "SW": "1505",
      "faults": null,
      "id": 101694,
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
