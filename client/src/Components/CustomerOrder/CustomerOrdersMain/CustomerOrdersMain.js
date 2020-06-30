import React, {Component} from 'react';
import CustomerOrdersList from './../CustomerOrdersList/CustomerOrdersList';
import AddNewCustomerOrder from './../AddNewCustomerOrder/AddNewCustomerOrder';
import { requestFetchCategoriesSuccess } from '../../Product/Actions/Categories.actions';

class CustomerOrdersMain extends Component {
    constructor(props){
        super(props);
        this.modes = {
            viewAll: 'viewAll',
            addOrder: 'addOrder'
        };

        this.state = {
            Mode: this.modes.viewAll
        }

        this.AddNewOrderClick = this.AddNewOrderClick.bind(this);
    }

    renderComponent(){
        // if(this.state.Mode === this.modes.addOrder){
        //     return (<AddNewCustomerOrder />);
        // }

        return (
            <div>
                <button className="uk-button uk-button-primary uk-align-right" onClick={this.AddNewOrderClick}>Add New Order</button>
                <CustomerOrdersList />
            </div>
        );
        
    }

    AddNewOrderClick(){
        this.setState({
            Mode: this.modes.addOrder
        });
    }

    render(){
        return(
            <div className="order-main-div">
                {this.renderComponent()}
            </div>
        );
    }
}

export default CustomerOrdersMain;
