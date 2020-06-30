import { List, Map } from 'immutable';
import {createSelector} from 'reselect';

const filterCustomers = () => {
    const filterSelector = state => {
      return state.getIn(['CustomerReducers', 'GetCustomers']) || new Map();
    };
  
    const getCustomer = createSelector(
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
        getCustomer,
        isLoading,
        isError
    };
};

export default filterCustomers;