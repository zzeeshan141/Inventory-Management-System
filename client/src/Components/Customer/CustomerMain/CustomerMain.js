import React, {Component} from 'react';
import CustomersList from './../CustomersList/CustomersList';
import AddNewCustomer from './../AddNewCustomer/AddNewCustomer';
import { requestFetchCategoriesSuccess } from '../../Product/Actions/Categories.actions';

class CustomerMain extends Component {
    constructor(props){
        super(props);
        this.modes = {
            viewAll: 'viewAll',
            addCustomer: 'addCustomer'
        };

        this.state = {
            Mode: this.modes.viewAll
        }

        this.AddNewCustomerClick = this.AddNewCustomerClick.bind(this);
    }

    renderComponent(){
        // if(this.state.Mode === this.modes.addCustomer){
        //     return (<AddNewCustomer />);
        // }

        return (
            <div>
                <button className="uk-button uk-button-primary uk-align-right" onClick={this.AddNewCustomerClick}>Add New Customer</button>
                <CustomersList />
            </div>
        );
        
    }

    AddNewCustomerClick(){
        this.setState({
            Mode: this.modes.addCustomer
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

export default CustomerMain;
