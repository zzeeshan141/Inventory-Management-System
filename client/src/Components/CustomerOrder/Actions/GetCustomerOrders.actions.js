import {REQUEST_FETCH_CUSTOMER_ORDERS,
    REQUEST_FETCH_CUSTOMER_ORDERS_PENDING,
    REQUEST_FETCH_CUSTOMER_ORDERS_SUCCESS,
    REQUEST_FETCH_CUSTOMER_ORDERS_FAILED,
    FETCH_CUSTOMER_ORDERS} from './ActionTypes';


export function requestfetchCustomerOrders(){
    return {type: REQUEST_FETCH_CUSTOMER_ORDERS};
}

export function requestfetchCustomerOrdersPending(){
    return {type: REQUEST_FETCH_CUSTOMER_ORDERS_PENDING};
}

export function requestfetchCustomerOrdersSuccess({payload}){
    return {type: REQUEST_FETCH_CUSTOMER_ORDERS_SUCCESS, payload};
}

export function requestfetchCustomerOrdersFailed(){
    return {type: REQUEST_FETCH_CUSTOMER_ORDERS_FAILED};
}

export function fetchCustomerOrders(criteria){
    return {type: FETCH_CUSTOMER_ORDERS, criteria};
}