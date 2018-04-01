import { updateTradingValuesAction } from '../../../src/store/actions/updateTradingValuesActions';

describe('>>>A C T I O N --- Test updateTradingValuesActions', () => {
  it('+++ actionCreator updateTradingValuesAction', () => {
    const tradingValuesToUpdate = [];
    const updateAllTradingValues = updateTradingValuesAction(tradingValuesToUpdate)
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