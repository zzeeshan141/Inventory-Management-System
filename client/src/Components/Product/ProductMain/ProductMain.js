import React, {Component} from 'react';
import ProductCategory from './../ProductCategory/ProductCategory';
import ProductGridView from '../ProductGridView/ProductGridView';

class ProductMain extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            selectedCategory: 1,
        }
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState)
    // {
    //   return false;
    // }

    onCategoryChange(categoryId)
    {
      this.setState({selectedCategory: categoryId});
    }
  
    render(){
      return(
        <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top product-main uk-grid" uk-grid="true">
            <ProductCategory data={{onCategoryChange: this.onCategoryChange}}/>
            <ProductGridView data={{categoryId: this.state.selectedCategory}}/>
        </div>
      );
    }
}

export default ProductMain;
