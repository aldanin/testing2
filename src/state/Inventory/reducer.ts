import * as Redux from 'redux'
import * as Actions from './actions'
// import * as InventoryData from '../../types/InventoryData'
// import * as Filters from '../../types/Filters'
import * as Immutable from 'immutable'

export type Action =
  Actions.InventoryMainRequestAction |
  Actions.InventoryMainSuccessAction |
  Actions.InventoryMainFailAction |
  Redux.Action

type State = Immutable.Map<string, any>

export const initialState: State = Immutable.fromJS({
  inventoryMainData: {
    stations: [],
    totalItems: 0,
    pageNumber: 0,
    pageSize: 0,
  },
  inventoryMainFilters: null,
  isFetching: false,
  error: null,
})

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function inventory(state: State = initialState, action: Action) {
  let data;
  let immutableData;
  let filters;
  // let station;
  // let stationId;
  let index;

  switch (action.type) {
    case Actions.INVENTORY_FAIL:
      const error = (<Actions.InventoryMainFailAction> action).error;
      return state
        .set('error', error)
        .set('isFetching', false);
    case Actions.INVENTORY_MAIN_REQUEST:
      filters =
        (<Actions.InventoryMainRequestAction> action).payload;
      return state
        .set('inventoryMainFilters', filters)
        .set('error', false)
        .set('isFetching', true);
    case  Actions.INVENTORY_MAIN_SUCCESS:

      data = (<Actions.InventoryMainSuccessAction> action).payload.data;
      immutableData = Immutable.fromJS(data);

      return state
        .set('inventoryMainData', immutableData)
        .set('error', false)
        .set('isFetching', false);
    // case Actions.INVENTORY_DEVICE_REQUEST:
    //   filters =
    //     (<Actions.InventoryDeviceRequestAction> action).payload;
    //   return state
    //     .set('inventoryDeviceFilters', filters)
    //     .set('error', false)
    //     .set('isFetching', true);
    case  Actions.INVENTORY_DEVICE_SUCCESS:

      data = (<Actions.InventoryDeviceSuccessAction> action).payload.data;

      index = state.getIn(['inventoryMainData', 'stations']).findIndex(station => {
        return station.get('stationId') === data.stationId;
      })

      immutableData = Immutable.fromJS(data);

      return state
        .setIn(['inventoryMainData', 'stations', index, 'devices', data.deviceType], immutableData)
        .set('error', false)
        .set('isFetching', false);
    // case  Actions.INVENTORY_DEVICE_SUCCESS:
    //
    //   data = (<Actions.InventoryDeviceSuccessAction> action).payload;
    //   immutableData = Immutable.fromJS(data);
    //
    //   return state
    //     .set('inventoryMainData', immutableData)
    //     .set('error', false)
    //     .set('isFetching', false);
    default:
      return state
  }
}

export default inventory
