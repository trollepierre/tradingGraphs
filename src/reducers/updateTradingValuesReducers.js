const initialState = {tradingValues:[]}

const updateTradingValuesReducers = (state=initialState,action) => {
    switch (action.type){
        case 'UPDATE_TRADING_VALUES':
            return {...state,tradingValues:action.tradingValues}
        default: return {...state}

    }

}

export default updateTradingValuesReducers