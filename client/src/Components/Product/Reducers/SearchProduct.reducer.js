import { fromJS, List } from 'immutable';
import {REQUEST_SEARCH_PRODUCTS_PENDING,
    REQUEST_SEARCH_PRODUCTS_SUCCESS,
    REQUEST_SEARCH_PRODUCTS_FAILED,
    SEARCH_PRODUCTS} from './../Actions/ActionTypes';
import _ from 'lodash';

let initialState = fromJS({});
export default (state = initialState, action) => {
    switch(action.type){
        case SEARCH_PRODUCTS:{
            return state;
        }

        case REQUEST_SEARCH_PRODUCTS_PENDING:{
            return state = 
                fromJS({
                    error: false,
                    loading: true,
                    payload: {},
                }
              );
        }

        case REQUEST_SEARCH_PRODUCTS_SUCCESS: {
            return fromJS({
                error: false,
                loading: false,
                payload: action.payload,
            });
        }

        case REQUEST_SEARCH_PRODUCTS_FAILED: {
            return state.updateIn(['data'], v =>
            v.set('loading', false).set('error', true));
        }

        default:
            return state;
    }
};