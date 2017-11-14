import * as types from './types';
import ProductionApi from './Production';
import { getInventoryMainData } from '../mockData/InventoryMain'
import { getNozzleReaderData } from '../mockData/NozzleReader'
import { getRFUData } from '../mockData/RFU'
import { getCVSData } from '../mockData/CVS'
import * as InventoryData from '../types/InventoryData'

// import { AxiosPromise } from 'axios';

class MockApi implements Partial<ProductionApi> {
  private sessionToken: string;

  public setSessionToken(sessionToken: string) {
    this.sessionToken = sessionToken;
  }

  public doLogin(username: string, password: string): Promise<{}> {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'service') {
        resolve({
          id_token: 'abcdefg-123456',
          user_info: {
            name: 'Chcuk Norris 2nd',
          },
        })
      } else {
        reject(new Error('Bad credentials'))
      }
    })
  }

  public doLogout(): Promise<void> {
    return Promise.resolve();
  }

  public fetchInventoryMain(meta: types.ProductMeta, query: types.ApiQueryParams): Promise<any> {
    return (getMockData(getInventoryMainData(query.filters)) as Promise<InventoryData.InventoryMain>);
  }

  public fetchInventoryDevice(meta: types.ProductMeta, query: types.InventoryDeviceApiQuery): Promise<any> {
    let request;
    switch(query.deviceType) {
      case 'NozzleReader':
        request =
          getMockData(getNozzleReaderData(query.stationId, query.filters)) as Promise<InventoryData.InventoryMain>;
        break;
      case 'RFU':
        request =
          getMockData(getRFUData(query.stationId, query.filters)) as Promise<InventoryData.InventoryMain>;
        break;
      case 'CVS':
        request =
          getMockData(getCVSData(query.stationId, query.filters)) as Promise<InventoryData.InventoryMain>;
        break;
      default:
        break;
    }
    return request;
  }
}

export function getMockData(data: object) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(data)
      },
      500)
  })
}

export default MockApi;
