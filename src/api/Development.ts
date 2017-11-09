// import * as types from './types';
import ProductionApi from './Production';
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
