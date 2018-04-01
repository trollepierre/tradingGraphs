import { ADD_SPECIFIC_VALUE } from '../actions/addSpecificValueAction';

const initialState = {
  specificValues: [],
};

const updateSpecificValue = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPECIFIC_VALUE: {
      const { index, newValue, stockMarket } = action.payload;
      const specificValues = [
        ...state.specificValues
          .filter(updatedValue =>
            !(updatedValue.index === index && updatedValue.stockMarket === stockMarket)),
        { index, newValue, stockMarket },
      ];
      return {
        ...state,
        specificValues,
      };
    }
    default:
      return state;
  }
};

export default updateSpecificValue;
