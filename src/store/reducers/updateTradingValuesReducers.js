import {
  TRADING_VALUES_FAILURE,
  TRADING_VALUES_REQUEST,
  TRADING_VALUES_SUCCESS,
} from '../actions/updateTradingValuesActions';
import applyUpdateIntoDataFromApi from './applyUpdateIntoDataFromApi';

const initialState = { tradingValues: [], updatedValues: [], isFetching: false };

const updateTradingValuesReducers = (state = initialState, action) => {
  switch (action.type) {
    case TRADING_VALUES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case TRADING_VALUES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tradingValues: applyUpdateIntoDataFromApi(state.updatedValues, action.payload.data),
      };
    case TRADING_VALUES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      });
    default:
      return state;
  }
};

export default updateTradingValuesReducers;
