import { all, fork, spawn } from 'redux-saga/effects';
import CategoryProductsSaga from './../Components/Product/Sagas/';
import CustomerOrderRootSaga from './../Components/CustomerOrder/Sagas';
import CustomersRootSaga from './../Components/Customer/Sagas';

export default function* root() {
    yield all([
      fork(CategoryProductsSaga),
      fork(CustomerOrderRootSaga),
      fork(CustomersRootSaga)
    ]);
}