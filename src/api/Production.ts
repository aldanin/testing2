import { getSessionData } from '../helpers/SessionToken';
import * as qs from 'querystring';
import axios from 'axios';
import {
  // AxiosPromise,
  AxiosRequestConfig
} from 'axios'

import * as types from './types';

class ProductionApi {
  private apiAddress: string;
  private sessionToken: string;

  static getApiAddress() {
    return process.env.REACT_APP_API_URL;
  }

  constructor() {
    this.apiAddress = ProductionApi.getApiAddress();

    this.sessionToken = getSessionData() ? getSessionData() : null;
  }

  public setSessionToken(sessionToken: string) {
    this.sessionToken = sessionToken;
  }

  public doLogin(username: string, password: string): Promise<{}> {
    let uri = this.generateApiURI('user/login');

    let request = Promise.resolve(this.post(uri, {username: username, password: password}));

    return request.then((result) => result.data).catch((e) => {
      throw new Error(e.response.data.error);
    });
  }

  public doLogout(): Promise<void> {
    let uri = this.generateApiURI('logout');

    return Promise.resolve(this.post(uri, {})).then((result) => result.data);
  }

  public generateApiURI(endpoint: string,
                        query?: types.ApiQueryParams
                      ) {
    query = query || {};

    return `${this.apiAddress}/${endpoint}?${qs.stringify(query)}`;
  }

  public fetchInventoryMain(meta: types.ProductMeta, query: types.ApiQueryParams): Promise<any> {
    let uri = this.generateApiURI(`inventory`, query);

    return Promise.resolve(this.get(uri)).then((result) => result.data);
  }

  public fetchInventoryDevice(meta: types.ProductMeta, query: types.InventoryDeviceApiQuery): Promise<any> {
    let uri = this.generateApiURI(`inventory`, query);

    return Promise.resolve(this.get(uri)).then((result) => result.data);
  }

  // private delete(uri: string) {
  //   let headers = this.sessionToken ? {bearer: this.sessionToken} : null;

  //   return (<any> axios)({method: 'DELETE', url: uri, headers, json: true});
  // }

  private post(uri: string, data?: object) {
    let headers = this.sessionToken ? {bearer: this.sessionToken} : null;
    const request = {
      method: 'POST',
      url: uri,
      data: data,
      headers,
      json: true
    } as AxiosRequestConfig

    return axios(request);
  }

  private get(uri: string) {
    let headers = this.sessionToken ? {bearer: this.sessionToken} : null;

    return (<any> axios)({method: 'GET', url: uri, headers: headers, json: true});
  }
}

export default ProductionApi;
