const applyUpdateIntoDataFromApi = (updatedValues, tradingValues) =>
  tradingValues.map((tradingValue) => {
    const updates = updatedValues.filter(updatedValue => tradingValue.index === updatedValue.index);

    if (updates.length === 0) {
      return tradingValue;
    }
    const cac40Updates = updates.filter(update => update.stockMarket === 'CAC40');
    const nasdaqUpdates = updates.filter(update => update.stockMarket === 'NASDAQ');

    if (cac40Updates.length === 0) {
      return ({
        ...tradingValue,
        stocks: {
          CAC40: tradingValue.stocks.CAC40,
          NASDAQ: nasdaqUpdates[0].newValue,
        },
      });
    }
    if (nasdaqUpdates.length === 0) {
      return ({
        ...tradingValue,
        stocks: {
          NASDAQ: tradingValue.stocks.NASDAQ,
          CAC40: cac40Updates[0].newValue,
        },
      });
    }
    return ({
      ...tradingValue,
      stocks: {
        NASDAQ: nasdaqUpdates[0].newValue,
        CAC40: cac40Updates[0].newValue,
      },
    });
  });

export default applyUpdateIntoDataFromApi;