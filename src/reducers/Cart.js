import * as types from '../constants/actionTypes/CartActionTypes';

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        products: state.products.push(action.product)
      }
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((product) => { return product.id !== action.id })
      }
    default:
      return state;
  }
}