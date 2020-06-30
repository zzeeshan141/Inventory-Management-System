import { List, Map } from 'immutable';
import {createSelector} from 'reselect';

const filterCustomerOrders = () => {
    const filterSelector = state => {
      return state.getIn(['CustomerOrderReducers', 'GetCustomerOrders']) || new Map();
    };
  
    const getCustomerOrder = createSelector(
      filterSelector,
      filterData => filterData.get('payload') || new List(),
    );

    const isLoading = createSelector(
        filterSelector,
        filterData => filterData.get('loading'),
    );

    const isError = createSelector(
    filterSelector,
    filterData => filterData.get('error'),
    );
    return {
        getCustomerOrder,
        isLoading,
        isError
    };
};

export default filterCustomerOrders;