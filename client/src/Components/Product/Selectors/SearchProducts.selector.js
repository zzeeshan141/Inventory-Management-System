import { List, Map } from 'immutable';
import {createSelector} from 'reselect';

const filterSearchProductsSelectorCreator = () => {
    const filterSelector = state => {
      return state.getIn(['CategoryProductReducer', 'searchedProducts']) || new Map();
    };
  
    const getProducts = createSelector(
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
        getProducts,
        isLoading,
        isError
    };
};

export default filterSearchProductsSelectorCreator;