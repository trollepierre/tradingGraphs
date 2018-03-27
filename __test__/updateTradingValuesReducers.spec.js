import React from 'react';

import updateTradingValues from '../src/reducers/updateTradingValuesReducers';

describe('>>>R E D U C E R --- Test updateTradingValues', () => {
  const tradingValues = [{
    "timestamp": 1522088675779,
    "index": 1171,
    "stocks": { "NASDAQ": 5.4068431512503855e-16, "CAC40": 3.945096443354243e-24 }
  }];

  it('+++ reducer for TRADING_VALUES_REQUEST', () => {
    let state = { tradingValues: [] }
    state = updateTradingValues(state, { type: "TRADING_VALUES_REQUEST", tradingValues: [] })
    expect(state).toEqual({ isFetching: true, tradingValues: [] })
  });

  it('+++ reducer for TRADING_VALUES_SUCCESS', () => {
    let state = { tradingValues: [] }
    const payload = { data: tradingValues };
    state = updateTradingValues(state, { type: "TRADING_VALUES_SUCCESS", payload })
    expect(state).toEqual({ isFetching: false, tradingValues })
  });

  it('+++ reducer for TRADING_VALUES_FAILURE', () => {
    let state = { tradingValues: [] }
    state = updateTradingValues(state, { type: "TRADING_VALUES_FAILURE", error: 'some_error' })
    expect(state).toEqual({ isFetching: false, tradingValues: [] })
  });
});