import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSagas from './sagas/rootSaga';
import reducers from './Reducers';
import {Provider, connect} from 'react-redux';

// Store
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
