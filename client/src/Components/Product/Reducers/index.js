import {combineReducers} from 'redux-immutable';
import searchedProducts from './SearchProduct.reducer';
import categories from './Categories.reducer';


export default combineReducers({
    searchedProducts,
    categories
});