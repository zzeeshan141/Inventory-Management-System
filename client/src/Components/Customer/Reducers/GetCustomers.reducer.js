import {fromJS} from 'immutable';
import {REQUEST_FETCH_CUSTOMERS,
    REQUEST_FETCH_CUSTOMERS_PENDING,
    REQUEST_FETCH_CUSTOMERS_SUCCESS,
    REQUEST_FETCH_CUSTOMERS_FAILED} from './../Actions/ActionTypes';

const initialState = fromJS({});
export default (state=initialState, action) => {

    switch(action.type){
        case REQUEST_FETCH_CUSTOMERS || REQUEST_FETCH_CUSTOMERS_PENDING: {
            return state = fromJS({
                payload: {},
                isLoading: true,
                isError: false
            });
        }
        case REQUEST_FETCH_CUSTOMERS_SUCCESS: {
            return state = fromJS({
                payload: action.payload,
                isLoading: false,
                isError: false
            });
        }
        case REQUEST_FETCH_CUSTOMERS_FAILED: {
            return state = fromJS({
                payload: {},
                isLoading: false,
                isError: true
            });
        }
        default:
            return state;
    }
};