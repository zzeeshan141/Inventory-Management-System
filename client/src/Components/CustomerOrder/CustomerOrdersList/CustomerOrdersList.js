import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import DataTable from 'datatables.net';
import _ from 'lodash';
import filterCustomerOrders from './../Selectors/GetCustomerOrders.selector';
import {fetchCustomerOrders} from './../Actions/GetCustomerOrders.actions';
import './../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css';
import dataTables from './../../../../node_modules/datatables.net-dt/js/dataTables.dataTables';

$.DataTable = DataTable;

class CustomerOrdersList extends Component {
    constructor(props){
      super(props);
      this.tableRef = React.createRef();

    }
    componentDidMount(){
      this.props.fetchCustomerOrders();
      this.table = $(this.refs.main).DataTable({
        aaSorting: [],
        columns: [
          {
            data: 'customerName'
          },
          {
            data: 'orderNumber',
            render: (data, type, row, meta) => {
              return '<a href="#">' + data + '</a>';
            }
          },
          {
            data: 'status'
          }
        ]
      });
    }

    componentWillUnmount(){
      $(this.refs.main)
      .find('table')
      .DataTable()
      .destroy(true);
    }

    reloadTableData(customerOrders) {
        this.table.clear();
        this.table.rows.add(customerOrders);
        this.table.draw();
  }
  shouldComponentUpdate(nextProps) {
    this.reloadTableData(nextProps.customerOrders);
    return true;
  }


  render(){
    return(
      <div className="customer-orders-list-main-div">
          <h1>CustomerOrdersList</h1>
          <table ref="main" className="uk-table uk-table-hover uk-table-striped">
          <thead>
            <tr>
                <th scope="col">Customer</th>
                <th scope="col">Order</th>
                <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
          </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {getCustomerOrder, isLoading, isError} = filterCustomerOrders();
  return {
    customerOrders: getCustomerOrder(state).toJS(),
      isLoading: isLoading(state),
      isError: isError(state)
  };
};

CustomerOrdersList.propTypes = {
  customerOrders: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

CustomerOrdersList.defaultProps = {
  customerOrders: [],
  isLoading: true,
  isError: false,
};

export default connect(mapStateToProps, {fetchCustomerOrders})(CustomerOrdersList);
