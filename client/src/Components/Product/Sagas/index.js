import { spawn, all } from 'redux-saga/effects';
import watchFetchProducts from './SearchProduct.sagas';
import watchFetchCategories from './Categories.saga';

export default function* rootSaga() {
  yield all([spawn(watchFetchProducts)]);
  yield all([spawn(watchFetchCategories)]);
}
