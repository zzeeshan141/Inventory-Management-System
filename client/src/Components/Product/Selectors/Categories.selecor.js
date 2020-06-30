import { List, Map } from 'immutable';
import {createSelector} from 'reselect';

const filterCategoriesSelectorCreator = () => {
    const filterSelector = state => {
      return state.getIn(['CategoryProductReducer', 'categories']) || new Map();
    };
  
    const getCategories = createSelector(
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
        getCategories,
        isLoading,
        isError
    };
};

export default filterCategoriesSelectorCreator;