import { combineReducers } from 'redux';

const initialCartState = {
  items: [],
};



const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (!state.items.some(item => item.clothName === action.payload.clothName)) {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
      return state;

    case 'REMOVE_FROM_CART':

    return {
      ...state,
      items: state.items.filter(item => item.clothName !== action.payload.clothName),
    };

    default:
      return state;
  }
};



const rootReducer = combineReducers({
  cart: cartReducer,
  
  
});

export default rootReducer;
