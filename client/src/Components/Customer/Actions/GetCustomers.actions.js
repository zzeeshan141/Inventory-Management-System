import {REQUEST_FETCH_CUSTOMERS,
    REQUEST_FETCH_CUSTOMERS_PENDING,
    REQUEST_FETCH_CUSTOMERS_SUCCESS,
    REQUEST_FETCH_CUSTOMERS_FAILED,
    FETCH_CUSTOMERS} from './ActionTypes';


export function requestfetchCustomers(){
    return {type: REQUEST_FETCH_CUSTOMERS};
}

export function requestfetchCustomersPending(){
    return {type: REQUEST_FETCH_CUSTOMERS_PENDING};
}

export function requestfetchCustomersSuccess({payload}){
    return {type: REQUEST_FETCH_CUSTOMERS_SUCCESS, payload};
}

export function requestfetchCustomersFailed(){
    return {type: REQUEST_FETCH_CUSTOMERS_FAILED};
}

export function fetchCustomers(criteria){
    return {type: FETCH_CUSTOMERS, criteria};
}