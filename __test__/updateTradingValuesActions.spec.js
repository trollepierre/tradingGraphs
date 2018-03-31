import { updateTradingValues } from '../src/actions/updateTradingValuesActions';

describe('>>>A C T I O N --- Test updateTradingValuesActions', () => {
  it('+++ actionCreator updateTradingValues', () => {
    const tradingValuesToUpdate = [];
    const updateAllTradingValues = updateTradingValues(tradingValuesToUpdate)
    expect(updateAllTradingValues).toEqual(
      {
        types: [
          'TRADING_VALUES_REQUEST',
          'TRADING_VALUES_SUCCESS',
          'TRADING_VALUES_FAILURE'
        ],
        payload: {
          request: {
            url: ''
          }
        }
      })
  });
});