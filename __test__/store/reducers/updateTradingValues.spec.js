import React from 'react';

import updateTradingValues from '../../../src/store/reducers/updateTradingValues';

describe('>>>R E D U C E R --- Test updateTradingValues', () => {
  const tradingValues = [
    {"timestamp":1522088675779,"index":1,"stocks":{"NASDAQ":5.4068,"CAC40":39.45096}},
    {"timestamp":1522088676780,"index":2,"stocks":{"NASDAQ":1.522829895583126e-16,"CAC40":3.94555152592615e-24}},
    {"timestamp":1522088677781,"index":3,"stocks":{"NASDAQ":6.206572557378061e-17,"CAC40":3.596168489673036e-24}},
    {"timestamp":1522088696043,"index":4,"stocks":{"NASDAQ":3.276376453421659e-17,"CAC40":1.5931687861388128e-24}}]

  describe('+++ reducer for TRADING_VALUES_SUCCESS', () => {
    it('should add value to payload and keep the updated values', () => {
      const specificValues = [
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
        specificValues };
      const payload = { data: tradingValues };
      const meta = { previousAction: {otherpayload: {specificValues: specificValues}}};
      const newState = updateTradingValues(state, { type: "TRADING_VALUES_SUCCESS", payload, meta })
      expect(newState).toEqual({
        specificValues,
        "tradingValues": [
          {"timestamp":1522088675779,"index":1,"stocks":{"NASDAQ":5.4068,"CAC40":39.45096}},
          {"timestamp":1522088676780,"index":2,"stocks":{"NASDAQ":56,"CAC40":3.94555152592615e-24}},
          {"timestamp":1522088677781,"index":3,"stocks":{"NASDAQ":6.206572557378061e-17,"CAC40":3.596168489673036e-24}},
          {"timestamp":1522088696043,"index":4,"stocks":{"NASDAQ":3.276376453421659e-17,"CAC40":1.5931687861388128e-24}}]
      })
    });
  });

  it('+++ reducer for ADD_SPECIFIC_VALUE', () => {
    const specificValues = [
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
    };
    const payload = {
      index: 2,
      newValue: 567,
      stockMarket: "NASDAQ",
      specificValues
    };
    const newState = updateTradingValues(state, { type: "ADD_SPECIFIC_VALUE", payload })
    expect(newState).toEqual( {"tradingValues": [{"index": 0, "stocks": {"CAC40": 100, "NASDAQ": 77}, "timestamp": 1522088675777}, {"index": 1, "stocks": {"CAC40": 39.45096, "NASDAQ": 5.4068}, "timestamp": 1522088675779}, {"index": 2, "stocks": {"CAC40": 3.94555152592615e-24, "NASDAQ": 567}, "timestamp": 1522088676780}, {"index": 3, "stocks": {"CAC40": 3.596168489673036e-24, "NASDAQ": 6.206572557378061e-17}, "timestamp": 1522088677781}]})
  });
});