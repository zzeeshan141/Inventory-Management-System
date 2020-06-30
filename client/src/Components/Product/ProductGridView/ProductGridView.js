import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import filterSearchProductsSelectorCreator from '../Selectors/SearchProducts.selector';
import SortByCombobox from '../../UIControls/SortByCombobox';
import Product from './Product';
import ProductGridPagenation from './ProductGridPagenation';
import {searchProducts} from '../Actions/SearchProduct.action';
import imgProduct1 from './../../../images/product-1.jpg';
import imgProduct2 from './../../../images/product-2.jpg';
import imgProduct3 from './../../../images/product-3.jpg';
import imgProduct4 from './../../../images/product-4.jpg';
import imgProduct5 from './../../../images/product-5.jpg';
import imgProduct6 from './../../../images/product-6.jpg';
import imgProduct7 from './../../../images/product-7.jpg';
import imgProduct8 from './../../../images/product-8.jpg';
import imgProduct9 from './../../../images/product-9.jpg';
import imgProduct10 from './../../../images/product-10.jpg';
import imgProduct11 from './../../../images/product-11.jpg';
import imgProduct12 from './../../../images/product-12.jpg';
import imgProduct13 from './../../../images/product-13.jpg';
import imgProduct14 from './../../../images/product-14.jpg';
import imgProduct15 from './../../../images/product-15.jpg';
import imgProduct16 from './../../../images/product-16.jpg';

class ProductGridView extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectedCateGoryId: 1,
            sortOrder: 1,
        }
        this.onSortByChange = this.onSortByChange.bind(this);
    }
  
    componentDidMount()
    {
        this.setState({
            selectedCateGoryId: this.props.data.categoryId,
            sortOrder: 1,
        });
        this.props.searchProducts({categoryId: this.state.selectedCateGoryId});
    }

    shouldComponentUpdate(nextProps, nextState)
    {  
        if(nextProps.data.categoryId != this.props.data.categoryId)
        {
            this.props.searchProducts({categoryId: nextProps.data.categoryId});
            return false;
        }
        
        return true;
    }

    getRefSortList()
    {
        return [
            {
                id: 1,
                name: 'Popularity'
            },
            {
                id: 2,
                name: 'Price high to low'
            },
            {
                id: 3,
                name: 'Price low to high'
            }
        ];
    }

    onSortByChange(fieldData)
    {
        this.setState({
            selectedCateGoryId: this.state.selectedCateGoryId,
            sortOrder: fieldData.item.id
        });
    }
    renderDataReceivedFromDummyApi(){
        if(this.props.products.length > 0)
        {
            var sortedProducts = this.props.products;

            if(this.state.sortOrder == 2)
                sortedProducts = _.orderBy(this.props.products, ['price'], ['desc']);
            if(this.state.sortOrder == 3)
                sortedProducts = _.orderBy(this.props.products, ['price'], ['asc']);
            return (
                <div>
                <SortByCombobox data={{fieldName: "productSortBy", label: "SortBy: ", items: this.getRefSortList(), 
                onChange: this.onSortByChange}}/>
                <div className="product-grid-main">
                    <div className="product-grid-container">
                    {
                        sortedProducts.map(product => {
                        return(
                            <Product key={product.id} data={{product: product}}/>
                        );})
                    }
                    </div>
                    <ProductGridPagenation />
                </div>
            </div>
            );
        }
        else
        {
            return (
                <div className="product-grid-main">
                    <div className="product-grid-container">
                        <h1>Loading</h1>
                    </div>
                </div>
            )
        }
    }
  render(){
    return(
        this.renderDataReceivedFromDummyApi()
    );
  }
}

const mapStateToProps = (state) => {
    const {getProducts, isLoading, isError} = filterSearchProductsSelectorCreator();
    return {
        products: getProducts(state).toJS(),
        isLoading: isLoading(state),
        isError: isError(state)
    };
};

ProductGridView.propTypes = {
    products: PropTypes.array,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
};
  
ProductGridView.defaultProps = {
    products: [],
    isLoading: true,
    isError: false,
};

export default connect(mapStateToProps, {searchProducts})(ProductGridView);

