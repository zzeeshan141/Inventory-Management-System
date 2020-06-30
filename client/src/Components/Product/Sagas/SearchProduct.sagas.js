import {call, put, spawn, takeEvery, select, all} from 'redux-saga/effects';
import {GetDummyProductsByCategory} from './../../../apis/DummyApi';
import {REQUEST_SEARCH_PRODUCTS,
    REQUEST_SEARCH_PRODUCTS_SUCCESS,
    REQUEST_SEARCH_PRODUCTS_FAILED,
    SEARCH_PRODUCTS} from './../Actions/ActionTypes';

import {requestSearchProductsPending,
    requestSearchProductsSuccess,
    requestSearchProductsFailed,
    searchProducts} from './../Actions/SearchProduct.action';

function* fetchProductsAsync(action) {
try {
    yield put(requestSearchProductsPending());
    const payload = yield call(() => {
        return GetDummyProductsByCategory(action.criteria.categoryId);
    //return fetch('https://dog.ceo/api/breeds/image/random')
    //        .then(res => res.json())
    }
    );
    yield put(requestSearchProductsSuccess({payload}));
} catch (error) {
    yield put(requestSearchProductsFailed());
}
}

// Sagas
export default function* watchFetchProducts() {
    yield takeEvery(SEARCH_PRODUCTS, fetchProductsAsync);
}