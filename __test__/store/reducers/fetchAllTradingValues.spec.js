import React from 'react';

import fetchAllTradingValues from '../../../src/store/reducers/fetchAllTradingValues';

describe('>>>R E D U C E R --- Test fetchAllTradingValues', () => {
  const tradingValues = [
    {"timestamp":1522088675779,"index":1,"stocks":{"NASDAQ":5.4068,"CAC40":39.45096}},
    {"timestamp":1522088676780,"index":2,"stocks":{"NASDAQ":1.522829895583126e-16,"CAC40":3.94555152592615e-24}},
    {"timestamp":1522088677781,"index":3,"stocks":{"NASDAQ":6.206572557378061e-17,"CAC40":3.596168489673036e-24}},
    {"timestamp":1522088696043,"index":4,"stocks":{"NASDAQ":3.276376453421659e-17,"CAC40":1.5931687861388128e-24}}]

  it('+++ reducer for TRADING_VALUES_REQUEST', () => {
    const state = { tradingValues: [] };
    const newState = fetchAllTradingValues(state, { type: "TRADING_VALUES_REQUEST", tradingValues: [] })
    expect(newState).toEqual({ isFetching: true, tradingValues: [] })
  });

  describe('+++ reducer for TRADING_VALUES_SUCCESS', () => {
    it('should add value to payload and keep the updated values', () => {
      const updatedValues = [
        {
          "index": 2,
          "newValue": 56,
          "stockMarket": "NASDAQ"
        }];

      const state = {
        tradingValues: [
          {"timestamp":1522088675777,"index":0,"stocks":{"NASDAQ":77,"CAC40":100}},
          {"timestamp":1522088675779,"index":1,"stocks":{"NASDAQ":5.4068,"CAC40":39.45096}},
          {"timestamp":1522088676780,"index":2,"stocks":{"NASDAQ":1234567,"CAC40":3.94555152592615e-24}},
          {"timestamp":1522088677781,"index":3,"stocks":{"NASDAQ":6.206572557378061e-17,"CAC40":3.596168489673036e-24}}],
        updatedValues };
      const payload = { data: tradingValues };
      const newState = fetchAllTradingValues(state, { type: "TRADING_VALUES_SUCCESS", payload })
      expect(newState).toEqual({ isFetching: false,
        updatedValues,
        "tradingValues": [
          {"timestamp":1522088675779,"index":1,"stocks":{"NASDAQ":5.4068,"CAC40":39.45096}},
          {"timestamp":1522088676780,"index":2,"stocks":{"NASDAQ":56,"CAC40":3.94555152592615e-24}},
          {"timestamp":1522088677781,"index":3,"stocks":{"NASDAQ":6.206572557378061e-17,"CAC40":3.596168489673036e-24}},
          {"timestamp":1522088696043,"index":4,"stocks":{"NASDAQ":3.276376453421659e-17,"CAC40":1.5931687861388128e-24}}]
      })
    });
  });

  it('+++ reducer for TRADING_VALUES_FAILURE', () => {
    const state = { tradingValues: [] };
    const newState = fetchAllTradingValues(state, { type: "TRADING_VALUES_FAILURE", error: 'some_error' })
    expect(newState).toEqual({ isFetching: false, tradingValues: [] })
  });
});