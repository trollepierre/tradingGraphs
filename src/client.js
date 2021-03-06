import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducers from './store/reducers';
import Layout from './components/Layout.jsx';

const app = document.getElementById('app');

const client = axios.create({
  baseURL: 'http://localhost:8000/?count=20',
  responseType: 'json',
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(axiosMiddleware(client)),
);

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>
  , app,
);

