import {fromJS} from 'immutable';
import {REQUEST_FETCH_CUSTOMER_ORDERS,
    REQUEST_FETCH_CUSTOMER_ORDERS_PENDING,
    REQUEST_FETCH_CUSTOMER_ORDERS_SUCCESS,
    REQUEST_FETCH_CUSTOMER_ORDERS_FAILED} from './../Actions/ActionTypes';

const initialState = fromJS({});
export default (state=initialState, action) => {

    switch(action.type){
        case REQUEST_FETCH_CUSTOMER_ORDERS || REQUEST_FETCH_CUSTOMER_ORDERS_PENDING: {
            return state = fromJS({
                payload: {},
                isLoading: true,
                isError: false
            });
        }
        case REQUEST_FETCH_CUSTOMER_ORDERS_SUCCESS: {
            return state = fromJS({
                payload: action.payload,
                isLoading: false,
                isError: false
            });
        }
        case REQUEST_FETCH_CUSTOMER_ORDERS_FAILED: {
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