export const TRADING_VALUES_REQUEST = 'TRADING_VALUES_REQUEST';
export const TRADING_VALUES_SUCCESS = 'TRADING_VALUES_SUCCESS';
export const TRADING_VALUES_FAILURE = 'TRADING_VALUES_FAILURE';

export function updateTradingValuesAction(specificValues) {
  return {
    types: [
      'TRADING_VALUES_REQUEST',
      'TRADING_VALUES_SUCCESS',
      'TRADING_VALUES_FAILURE',
    ],
    payload: {
      request: {
        url: '',
      },
    },
    otherpayload: {
      specificValues
    }
  };
}
