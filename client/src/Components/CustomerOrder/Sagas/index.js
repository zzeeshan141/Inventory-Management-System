import { spawn, all } from 'redux-saga/effects';
import WatchGetCustomerOrdersAsync from './GetCustomerOrders.saga';

export default function* CustomerOrdersRootSaga() {
  yield all([spawn(WatchGetCustomerOrdersAsync)]);
}
