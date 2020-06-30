import {fromJS} from 'immutable';
import {call, put, spawn, takeEvery, select, all} from 'redux-saga/effects';
import {GetDummyCustomerOrders} from './../../../apis/DummyApi';
import {FETCH_CUSTOMER_ORDERS} from './../Actions/ActionTypes';

import {requestfetchCustomerOrdersPending,
    requestfetchCustomerOrdersSuccess,
    requestfetchCustomerOrdersFailed} from './../Actions/GetCustomerOrders.actions';

function* GetCustomerOrdersAsync(action){
    try{
        yield put(requestfetchCustomerOrdersPending());

        const payload = yield call(() => {
            return GetDummyCustomerOrders();
        });

        yield put(requestfetchCustomerOrdersSuccess({payload}));
    }
    catch(e){
        yield put(requestfetchCustomerOrdersFailed());
    }
}


export default function* WatchGetCustomerOrdersAsync(){
    yield takeEvery(FETCH_CUSTOMER_ORDERS, GetCustomerOrdersAsync);
}

