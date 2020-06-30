import { spawn, all } from 'redux-saga/effects';
import WatchGetCustomersAsync from './GetCustomers.saga';

export default function* CustomersRootSaga() {
  yield all([spawn(WatchGetCustomersAsync)]);
}
