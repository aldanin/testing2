import { takeLatest, put, call } from 'redux-saga/effects'
import * as Actions from './actions'
import * as RosemanTypes from '../../types/RosemanTypes'
import * as Filters from '../../types/Filters'
// import * as InventoryData from '../../types/InventoryData'

import Api from '../../api';

export function apiGetData(filters: Filters.FiltersData) {
  let api = Api();

  return api.fetchInventoryMain(
    {productType: RosemanTypes.PRODUCT_TYPES.INVENTORY},
    {filters})
}

export function* fetchData(action: Actions.InventoryMainRequestAction) {
console.log('****saga',action )
  //if (action.productType === RosemanTypes.PRODUCT_TYPES.INVENTORY) {
  try {
    const {filters} = action.payload;
    const result = yield call(apiGetData, filters);
    yield put(Actions.inventoryMainSuccess(
      {data: result},
    ));
  } catch (error) {
    yield put(Actions.inventoryMainFail(error))
  }
  //}
}

export function* watchInventory() {
  yield takeLatest(Actions.INVENTORY_MAIN_REQUEST, fetchData)
}
