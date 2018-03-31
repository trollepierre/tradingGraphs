const applyUpdateIntoDataFromApi = (updatedValues, tradingValues) => {
  return tradingValues.map(tradingValue => {
    const updates = updatedValues.filter(updatedValue => tradingValue.index === updatedValue.index)
    if (updates.length === 0) {
      return tradingValue
    }
    else {
      const cac40Updates = updates.filter(update => update.stocks[stockMarket] === 'CAC40')
      const nasdaqUpdates = updates.filter(update => update.stocks[stockMarket] === 'NASDAQ')
      if (cac40Updates.length === 0) {
        return ({
          ...tradingValue,
          stocks: {
            'CAC40': tradingValue.stocks['CAC40'],
            'NASDAQ': nasdaqUpdates.newValue
          }
        })
      }
      if (nasdaqUpdates.length === 0) {
        return ({
          ...tradingValue,
          stocks: {
            'NASDAQ': tradingValue.stocks['NASDAQ'],
            'CAC40': cac40Updates.newValue
          }
        })
      }
      return ({
        ...tradingValue,
        stocks: {
          'NASDAQ': nasdaqUpdates.newValue,
          'CAC40': cac40Updates.newValue
        }
      })

    }
  })
}

export default applyUpdateIntoDataFromApi
