import {combineReducers} from 'redux-immutable';
import CategoryProductReducer from './../Components/Product/Reducers';
import CustomerOrderReducers from './../Components/CustomerOrder/Reducers';
import CustomerReducers from './../Components/Customer/Reducers';


export default combineReducers({
    CategoryProductReducer,
    CustomerOrderReducers,
    CustomerReducers
});