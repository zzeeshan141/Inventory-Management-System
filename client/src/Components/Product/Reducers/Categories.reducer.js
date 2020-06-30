import { fromJS, List } from 'immutable';
import {REQUEST_FETCH_CATEGORIES_PENDING,
    REQUEST_FETCH_CATEGORIES_SUCCESS,
    REQUEST_FETCH_CATEGORIES_FAILED,
    FETCH_CATEGORIES} from './../Actions/ActionTypes';
import _ from 'lodash';

let initialState = fromJS({});
export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_CATEGORIES:{
            return state;
        }

        case REQUEST_FETCH_CATEGORIES_PENDING:{
            return state = 
                fromJS({
                    error: false,
                    loading: true,
                    payload: {},
                }
              );
        }

        case REQUEST_FETCH_CATEGORIES_SUCCESS: {
            return fromJS({
                error: false,
                loading: false,
                payload: action.payload,
            });
        }

        case REQUEST_FETCH_CATEGORIES_FAILED: {
            return state.updateIn(['data'], v =>
            v.set('loading', false).set('error', true));
        }

        default:
            return state;
    }
};