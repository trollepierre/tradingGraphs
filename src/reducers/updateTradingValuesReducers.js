import {
  TRADING_VALUES_FAILURE,
  TRADING_VALUES_SUCCESS,
  TRADING_VALUES_REQUEST } from '../actions/updateTradingValuesActions';

const initialState = { tradingValues: [], isFetching: false }

const updateTradingValuesReducers = (state = initialState, action) => {
  switch (action.type) {
    case TRADING_VALUES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case TRADING_VALUES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        tradingValues: action.payload.data
      })
    case TRADING_VALUES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }
}

export default updateTradingValuesReducers