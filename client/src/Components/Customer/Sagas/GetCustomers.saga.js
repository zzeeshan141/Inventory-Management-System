import {fromJS} from 'immutable';
import {call, put, spawn, takeEvery, select, all} from 'redux-saga/effects';
import {GetDummyCustomers} from './../../../apis/DummyApi';
import {FETCH_CUSTOMERS} from './../Actions/ActionTypes';

import {requestfetchCustomersPending,
    requestfetchCustomersSuccess,
    requestfetchCustomersFailed} from './../Actions/GetCustomers.actions';

function* GetCustomersAsync(action){
    try{
        yield put(requestfetchCustomersPending());

        const payload = yield call(() => {
            return GetDummyCustomers();
        });

        yield put(requestfetchCustomersSuccess({payload}));
    }
    catch(e){
        yield put(requestfetchCustomersFailed());
    }
}


export default function* WatchGetCustomersAsync(){
    yield takeEvery(FETCH_CUSTOMERS, GetCustomersAsync);
}

