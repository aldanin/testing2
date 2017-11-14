import { takeLatest, put, call } from 'redux-saga/effects'
import * as Actions from './actions'
import * as RosemanTypes from '../../types/RosemanTypes'
import * as Filters from '../../types/Filters'
// import * as InventoryData from '../../types/InventoryData'

import Api from '../../api';

export function apiGetMainData(filters: Filters.FiltersData) {
  let api = Api();

  return api.fetchInventoryMain(
    {productType: RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN},
    {filters})
}

export function apiGetDeviceData(stationId: RosemanTypes.RosemanID,
                                 deviceType: string,
                                 filters: Filters.FiltersData) {
  let api = Api();

  return api.fetchInventoryDevice(
    {productType: RosemanTypes.PRODUCT_TYPES.INVENTORY_DEVICE},
    {
      stationId,
      deviceType,
      filters
    })
}

export function* fetchMainData(action: Actions.InventoryMainRequestAction) {
console.log('****saga',action )
  //if (action.productType === RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN) {
  try {
    const {filters} = action.payload;
    const result = yield call(apiGetMainData, filters);
    yield put(Actions.inventoryMainSuccess(
      {data: result},
    ));
  } catch (error) {
    yield put(Actions.inventoryMainFail(error))
  }
  //}
}
export function* fetchDeviceData(action: Actions.InventoryDeviceRequestAction) {
  //if (action.productType === RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN) {
  try {
    const {stationId, deviceType, filters} = action.payload;
    const result = yield call(apiGetDeviceData, stationId, deviceType, filters);
    yield put(Actions.inventoryDeviceSuccess(
      {data: result},
    ));
  } catch (error) {
    yield put(Actions.inventoryMainFail(error))
  }
  //}
}


export function* watchInventory() {
  yield takeLatest(Actions.INVENTORY_MAIN_REQUEST, fetchMainData)
  yield takeLatest(Actions.INVENTORY_DEVICE_REQUEST, fetchDeviceData)
}
