import * as Redux from 'redux'
import * as Filters from '../../types/Filters'
import * as InventoryData from '../../types/InventoryData'
import * as RosemanTypes from '../../types/RosemanTypes'
import InventoryStationaryDevices from '../../types/InventoryStationaryDevices'

export const INVENTORY_MAIN_REQUEST = 'Inventory/MAIN_REQUEST';
export const INVENTORY_MAIN_SUCCESS = 'Inventory/MAIN_SUCCESS';
export const INVENTORY_DEVICE_REQUEST = 'Inventory/DEVICE_REQUEST';
export const INVENTORY_DEVICE_SUCCESS = 'Inventory/DEVICE_SUCCESS';
export const INVENTORY_FAIL = 'Inventory/FAIL';

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
    type: INVENTORY_FAIL,
    error,
  }
}


export interface InventoryDeviceRequestAction extends Redux.Action {
  payload: {
    stationId: RosemanTypes.RosemanID,
    deviceType: string,
    filters: Filters.FiltersData,
  }
}

export function inventoryDeviceRequest(stationId: RosemanTypes.RosemanID,
                                       deviceType: string,
                                       filters: Filters.FiltersData): InventoryDeviceRequestAction {
  return {
    type: INVENTORY_DEVICE_REQUEST,
    payload: {
      stationId,
      deviceType,
      filters
    }
  };
}

export interface InventoryDeviceSuccessAction extends Redux.Action {
  payload: {
    data: InventoryStationaryDevices
  }
}

export function inventoryDeviceSuccess(payload: { data: InventoryStationaryDevices }): InventoryDeviceSuccessAction {
  return {
    type: INVENTORY_DEVICE_SUCCESS,
    payload
  };
}

export interface InventoryMainFailAction extends Redux.Action {
  error: Error
}

export function inventoryDeviceFail(error: Error): InventoryMainFailAction {
  return {
    type: INVENTORY_FAIL,
    error,
  }
}
