import { combineReducers } from 'redux';
import session from './Session/reducer';
import inventory from './Inventory/reducer'
import { PRODUCT_TYPES } from '../types/RosemanTypes'

const rootReducer = combineReducers({
  session,
  [PRODUCT_TYPES.INVENTORY]: inventory,
})

export default rootReducer
