import {REQUEST_FETCH_CATEGORIES_PENDING,
    REQUEST_FETCH_CATEGORIES_SUCCESS,
    REQUEST_FETCH_CATEGORIES_FAILED,
    FETCH_CATEGORIES} from './ActionTypes';


// Action Creators
export function requestFetchCategoriesPending() {
    return { type: REQUEST_FETCH_CATEGORIES_PENDING }
};
  
export function requestFetchCategoriesSuccess({payload}) {
  return { type: REQUEST_FETCH_CATEGORIES_SUCCESS, payload }
};
  
export function requestFetchCategoriesFailed() {
  return { type: REQUEST_FETCH_CATEGORIES_FAILED }
 };
  
 export function fetchCategories() {
  return { type: FETCH_CATEGORIES } 
};