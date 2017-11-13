import * as Redux from 'redux'
import * as Filters from '../../types/Filters'
import * as InventoryData from '../../types/InventoryData'

export const INVENTORY_MAIN_REQUEST = 'Inventory/MAIN_REQUEST';
export const INVENTORY_MAIN_SUCCESS = 'Inventory/MAIN_SUCCESS';
export const INVENTORY_MAIN_FAIL = 'Inventory/MAIN_FAIL';

export interface InventoryMainRequestAction extends Redux.Action {
  payload: {
    filters: Filters.FiltersData,
  }
}

export function inventoryMainRequest(filters: Filters.FiltersData): InventoryMainRequestAction {
  return {
    type: INVENTORY_MAIN_REQUEST,
    payload: {
      filters
    }
  };
}

export interface InventoryMainSuccessAction extends Redux.Action {
  payload: {
    data: InventoryData.InventoryMain
  }
}

export function inventoryMainSuccess(payload: { data: InventoryData.InventoryMain }): InventoryMainSuccessAction {
  return {
    type: INVENTORY_MAIN_SUCCESS,
    payload
  };
}

export interface InventoryMainFailAction extends Redux.Action {
  error: Error
}

export function inventoryMainFail(error: Error): InventoryMainFailAction {
  return {
    type: INVENTORY_MAIN_FAIL,
    error,
  }
}
