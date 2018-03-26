import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import updateTradingValuesReducers from './reducers/updateTradingValuesReducers'
import Layout from "./components/Layout";

const app = document.getElementById('app')

const store = createStore(updateTradingValuesReducers)

ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>
	, app);

