import {call, put, spawn, takeEvery, select, all} from 'redux-saga/effects';
import {GetDummyCategories} from './../../../apis/DummyApi';
import {FETCH_CATEGORIES} from './../Actions/ActionTypes';

import {requestFetchCategoriesPending,
    requestFetchCategoriesSuccess,
    requestFetchCategoriesFailed} from './../Actions/Categories.actions';

// Sagas
export default function* watchFetchCategories() {
    yield takeEvery(FETCH_CATEGORIES, fetchCategoriesAsync);
}

function* fetchCategoriesAsync() {
try {
    yield put(requestFetchCategoriesPending());
    const payload = yield call(() => {
        return GetDummyCategories();
    //return fetch('')
    //        .then(res => res.json())
    }
    );
    yield put(requestFetchCategoriesSuccess({payload}));
} catch (error) {
    yield put(requestFetchCategoriesFailed());
}
}