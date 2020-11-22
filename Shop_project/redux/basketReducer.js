import {BASKET_PRODUCT_ADD} from './basketAC';

const initState={
  basketProducts: [],
}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function basketReducer(state=initState,action) {
  switch (action.type) {

    case BASKET_PRODUCT_ADD: {
      let newState={...state,
        basketProducts:[...state.basketProducts, action.product]
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default basketReducer;
