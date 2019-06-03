import * as types from '~src/constants/actionTypes/ProductsActionTypes';
import { changeData } from '~src/helpers/dataStructureHelper';

const initialState = {
  products: [],
  isFetching: false,
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        products: changeData(action.response),
      };
    default:
      return state;
  }
}
