import { fork, all } from 'redux-saga/effects'
import { loginFlow, logoutFlow } from './Session/saga'
import { watchInventory } from './Inventory/saga'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fork(loginFlow),
    fork(logoutFlow),
    fork(watchInventory)
  ])
}
