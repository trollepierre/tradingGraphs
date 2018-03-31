import React from 'react';

import updateTradingValues from '../../src/reducers/updateTradingValuesReducers';

describe('>>>R E D U C E R --- Test updateTradingValues', () => {
  const tradingValues = [{"timestamp":1522088675779,"index":1171,"stocks":{"NASDAQ":5.4068,"CAC40":39.45096}},{"timestamp":1522088676780,"index":1172,"stocks":{"NASDAQ":1.522829895583126e-16,"CAC40":3.94555152592615e-24}},{"timestamp":1522088677781,"index":1173,"stocks":{"NASDAQ":6.206572557378061e-17,"CAC40":3.596168489673036e-24}},{"timestamp":1522088678784,"index":1174,"stocks":{"NASDAQ":4.9985934128653843e-17,"CAC40":2.5068263372660503e-24}},{"timestamp":1522088679789,"index":1175,"stocks":{"NASDAQ":4.997828466041129e-17,"CAC40":2.5073402767563972e-24}},{"timestamp":1522088680793,"index":1176,"stocks":{"NASDAQ":5.594087737951195e-17,"CAC40":2.5083468472811927e-24}},{"timestamp":1522088681797,"index":1177,"stocks":{"NASDAQ":5.578691795006405e-17,"CAC40":2.508349620657306e-24}},{"timestamp":1522088682801,"index":1178,"stocks":{"NASDAQ":4.636776164239889e-17,"CAC40":2.5525499766229472e-24}},{"timestamp":1522088685023,"index":1179,"stocks":{"NASDAQ":5.275109371861418e-17,"CAC40":2.5958349021816915e-24}},{"timestamp":1522088686026,"index":1180,"stocks":{"NASDAQ":3.5213374130575515e-17,"CAC40":2.5952393506150048e-24}},{"timestamp":1522088687029,"index":1181,"stocks":{"NASDAQ":4.4300319142539933e-17,"CAC40":1.1680797499574855e-24}},{"timestamp":1522088688031,"index":1182,"stocks":{"NASDAQ":4.1453589642739793e-17,"CAC40":1.1718150343238e-24}},{"timestamp":1522088689035,"index":1183,"stocks":{"NASDAQ":2.6854618300769548e-17,"CAC40":1.1718186307697852e-24}},{"timestamp":1522088690037,"index":1184,"stocks":{"NASDAQ":2.6859395440503376e-17,"CAC40":1.742369129222868e-24}},{"timestamp":1522088691037,"index":1185,"stocks":{"NASDAQ":2.5965792973917657e-17,"CAC40":1.7471786321970145e-24}},{"timestamp":1522088692041,"index":1186,"stocks":{"NASDAQ":3.421940340622865e-17,"CAC40":1.5017701094071147e-24}},{"timestamp":1522088693043,"index":1187,"stocks":{"NASDAQ":3.4197654206442485e-17,"CAC40":1.8572053077966067e-24}},{"timestamp":1522088694043,"index":1188,"stocks":{"NASDAQ":3.370772869213959e-17,"CAC40":1.8593797991467923e-24}},{"timestamp":1522088695043,"index":1189,"stocks":{"NASDAQ":3.385950852240345e-17,"CAC40":1.6064393325859262e-24}},{"timestamp":1522088696043,"index":1190,"stocks":{"NASDAQ":3.276376453421659e-17,"CAC40":1.5931687861388128e-24}}]

  const updatedValues = [
    {
      "index": 1171,
      "newValue": 56,
      "stockMarket": "NASDAQ"
    }]

  it('+++ reducer for TRADING_VALUES_REQUEST', () => {
    let state = { tradingValues: [] }
    state = updateTradingValues(state, { type: "TRADING_VALUES_REQUEST", tradingValues: [] })
    expect(state).toEqual({ isFetching: true, tradingValues: [] })
  });

  it('+++ reducer for TRADING_VALUES_SUCCESS', () => {
    let state = { tradingValues: [], updatedValues }
    const payload = { data: tradingValues };
    state = updateTradingValues(state, { type: "TRADING_VALUES_SUCCESS", payload })
    expect(state).toEqual({ isFetching: false,
      updatedValues,
      "tradingValues": [{"index": 1171, "stocks": {"CAC40": 39.45096, "NASDAQ": 56}, "timestamp": 1522088675779}, {"index": 1172, "stocks": {"CAC40": 3.94555152592615e-24, "NASDAQ": 1.522829895583126e-16}, "timestamp": 1522088676780}, {"index": 1173, "stocks": {"CAC40": 3.596168489673036e-24, "NASDAQ": 6.206572557378061e-17}, "timestamp": 1522088677781}, {"index": 1174, "stocks": {"CAC40": 2.5068263372660503e-24, "NASDAQ": 4.9985934128653843e-17}, "timestamp": 1522088678784}, {"index": 1175, "stocks": {"CAC40": 2.5073402767563972e-24, "NASDAQ": 4.997828466041129e-17}, "timestamp": 1522088679789}, {"index": 1176, "stocks": {"CAC40": 2.5083468472811927e-24, "NASDAQ": 5.594087737951195e-17}, "timestamp": 1522088680793}, {"index": 1177, "stocks": {"CAC40": 2.508349620657306e-24, "NASDAQ": 5.578691795006405e-17}, "timestamp": 1522088681797}, {"index": 1178, "stocks": {"CAC40": 2.5525499766229472e-24, "NASDAQ": 4.636776164239889e-17}, "timestamp": 1522088682801}, {"index": 1179, "stocks": {"CAC40": 2.5958349021816915e-24, "NASDAQ": 5.275109371861418e-17}, "timestamp": 1522088685023}, {"index": 1180, "stocks": {"CAC40": 2.5952393506150048e-24, "NASDAQ": 3.5213374130575515e-17}, "timestamp": 1522088686026}, {"index": 1181, "stocks": {"CAC40": 1.1680797499574855e-24, "NASDAQ": 4.4300319142539933e-17}, "timestamp": 1522088687029}, {"index": 1182, "stocks": {"CAC40": 1.1718150343238e-24, "NASDAQ": 4.1453589642739793e-17}, "timestamp": 1522088688031}, {"index": 1183, "stocks": {"CAC40": 1.1718186307697852e-24, "NASDAQ": 2.6854618300769548e-17}, "timestamp": 1522088689035}, {"index": 1184, "stocks": {"CAC40": 1.742369129222868e-24, "NASDAQ": 2.6859395440503376e-17}, "timestamp": 1522088690037}, {"index": 1185, "stocks": {"CAC40": 1.7471786321970145e-24, "NASDAQ": 2.5965792973917657e-17}, "timestamp": 1522088691037}, {"index": 1186, "stocks": {"CAC40": 1.5017701094071147e-24, "NASDAQ": 3.421940340622865e-17}, "timestamp": 1522088692041}, {"index": 1187, "stocks": {"CAC40": 1.8572053077966067e-24, "NASDAQ": 3.4197654206442485e-17}, "timestamp": 1522088693043}, {"index": 1188, "stocks": {"CAC40": 1.8593797991467923e-24, "NASDAQ": 3.370772869213959e-17}, "timestamp": 1522088694043}, {"index": 1189, "stocks": {"CAC40": 1.6064393325859262e-24, "NASDAQ": 3.385950852240345e-17}, "timestamp": 1522088695043}, {"index": 1190, "stocks": {"CAC40": 1.5931687861388128e-24, "NASDAQ": 3.276376453421659e-17}, "timestamp": 1522088696043}]
    })
  });

  it('+++ reducer for TRADING_VALUES_FAILURE', () => {
    let state = { tradingValues: [] }
    state = updateTradingValues(state, { type: "TRADING_VALUES_FAILURE", error: 'some_error' })
    expect(state).toEqual({ isFetching: false, tradingValues: [] })
  });
});