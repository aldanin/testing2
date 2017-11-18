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
  currentStationId: -1,
  currentViewType: 'Station',
  inventoryMainFilters: null,
  inventoryNozzleReadersFilters: null,
  inventoryRFUFilters: null,
  inventoryCVSFilters: null,
  isFetching: false,
  error: null,
})

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function inventory(state: State = initialState, action: Action) {
  let data, immutableData, index, filters, deviceType, stationId;

  switch (action.type) {
    case Actions.INVENTORY_FAIL:
      const error = (<Actions.InventoryMainFailAction> action).error;
      return state
        .set('error', error)
        .set('isFetching', false);
    case Actions.INVENTORY_MAIN_REQUEST:
      filters = (<Actions.InventoryMainRequestAction> action).payload;
      return state
        .set('inventoryMainFilters', filters)
        .set('error', false)
        .set('isFetching', true);
    case Actions.INVENTORY_DEVICE_REQUEST:
      ({filters, deviceType, stationId} = (<Actions.InventoryDeviceRequestAction> action).payload);

      switch (deviceType) {
        case 'NozzleReader':
          state = state.set('inventoryNozzleReadersFilters', filters);
          break;
        case 'RFU':
          state = state.set('inventoryRFUFilters', filters);
          break;
        case 'CVS':
          state = state.set('inventoryCVSFilters', filters);
          break;
        default:
          break;
      }

      return state
        .set('currentStationId', stationId)
        .set('error', false)
        .set('isFetching', true);
    case  Actions.INVENTORY_MAIN_SUCCESS:

      data = (<Actions.InventoryMainSuccessAction> action).payload.data;

      immutableData = Immutable.fromJS(data);

      return state
        .set('inventoryMainData', immutableData)
        .set('currentViewType', 'Station')
        .set('error', false)
        .set('isFetching', false);
    case  Actions.INVENTORY_DEVICE_SUCCESS:

      ({data, deviceType} = (<Actions.InventoryDeviceSuccessAction> action).payload);

      index = state.getIn(['inventoryMainData', 'stations']).findIndex(station => {
        return station.get('stationId') === state.get('currentStationId');
      })

      immutableData = Immutable.fromJS(data);

      return state
        .setIn(['inventoryMainData', 'stations', index, 'devices', deviceType], immutableData)
        .set('currentViewType', deviceType)
        .set('error', false)
        .set('isFetching', false);
    default:
      return state
  }
}

export default inventory
