import {REQUEST_SEARCH_PRODUCTS_PENDING,
    REQUEST_SEARCH_PRODUCTS_SUCCESS,
    REQUEST_SEARCH_PRODUCTS_FAILED,
    SEARCH_PRODUCTS} from './ActionTypes';


// Action Creators
export function requestSearchProductsPending() {
    return { type: REQUEST_SEARCH_PRODUCTS_PENDING }
};
  
export function requestSearchProductsSuccess({payload}) {
  return { type: REQUEST_SEARCH_PRODUCTS_SUCCESS, payload }
};
  
export function requestSearchProductsFailed() {
  return { type: REQUEST_SEARCH_PRODUCTS_FAILED }
 };
  
 export function searchProducts(criteria) {
  return { type: SEARCH_PRODUCTS, criteria } 
};