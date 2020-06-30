import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import filterCategoriesSelectorCreator from './../Selectors/Categories.selecor';
import {fetchCategories} from './../Actions/Categories.actions';

class ProductCategory extends Component {

    constructor(props)
    {
        super(props);
        this.state = { 
            selectedCategoryId: 1
        };
        //this.onCategoryClick = this.onCategoryClick.bind(this);
    }
  
    componentDidMount()
    {
        this.props.fetchCategories();
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if(this.props.categories.length === nextProps.categories.length 
            && this.state.selectedCategoryId === nextState.selectedCategoryId)
            return false;
        return true;
    }

    renderCategoriesFromRefData()
    {
        return (
            <div className="uk-grid-column-small product-category-main">
                <h4>Categories</h4>
                <ul className="uk-nav-default uk-nav-parent-icon product-category-main-ul" uk-nav="multiple: true">
                <li className="uk-active product-category-main-li"><a href="#">Active</a></li>
                <li className="uk-parent product-category-main-li">
                    <a href="#">Parent</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li>
                            <a href="#">Sub item</a>
                            <ul>
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="uk-parent product-category-main-li">
                    <a href="#">Parent</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
                <li className="uk-parent product-category-main-li">
                    <a href="#">Parent</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
                <li className="uk-parent product-category-main-li">
                    <a href="#">Parent</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
                <li className="uk-parent product-category-main-li">
                    <a href="#">Parent</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
                <li className="uk-parent product-category-main-li">
                    <a href="#">Parent</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
            </ul>
            </div>
        );
    }

    onCategoryClick(e)
    {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
        this.setState({selectedCategoryId: e.currentTarget.value});
        this.props.data.onCategoryChange(e.currentTarget.value);
    }

    renderCategoriesFromDummyApi()
    {
        return this.props.categories.map(category => {
            if(category.subCategories.length === 0)
            {
                return (<li key={category.id} value={category.id} onClick={this.onCategoryClick.bind(this)} className="product-category-main-li"><a href="#">{category.name}</a></li>);
            }
            else
            {
                return (
                    <li key={category.id} value={category.id} onClick={this.onCategoryClick.bind(this)} className="uk-parent product-category-main-li">
                        <a href="#">{category.name}</a>
                        <ul className="uk-nav-sub">
                            {this.renderSubCategories(category.subCategories)}
                        </ul>
                    </li>
                );
            }
        });
    }

    renderSubCategories(subCategories)
    {
        return subCategories.map(category => {
            return <li key={category.id} value={category.id} onClick={this.onCategoryClick.bind(this)} ><a href="#">{category.name}</a></li>
        });
    }

    
  
    render(){
        return(
            <div className="uk-grid-column-small product-category-main">
                <h4>Categories</h4>
                <ul className="uk-nav-default uk-nav-parent-icon product-category-main-ul" uk-nav="multiple: true">
                {this.renderCategoriesFromDummyApi()}
                </ul>
            </div>
        );  
    }
}

const mapStateToProps = (state) => {
    const {getCategories, isLoading, isError} = filterCategoriesSelectorCreator();
    return {
        categories: getCategories(state).toJS(),
        isLoading: isLoading(state),
        isError: isError(state)
    };
};

ProductCategory.propTypes = {
    categories: PropTypes.array,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
};
  
ProductCategory.defaultProps = {
    categories: [],
    isLoading: true,
    isError: false,
};

export default connect(mapStateToProps, {fetchCategories})(ProductCategory);

