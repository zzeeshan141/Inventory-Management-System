import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import DataTable from 'datatables.net';
import _ from 'lodash';
import filterCustomers from './../Selectors/GetCustomers.selector';
import {fetchCustomers} from './../Actions/GetCustomers.actions';
import './../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css';
import dataTables from './../../../../node_modules/datatables.net-dt/js/dataTables.dataTables';

$.DataTable = DataTable;

class CustomersList extends Component {
    constructor(props){
      super(props);
      this.tableRef = React.createRef();

    }
    componentDidMount(){
      this.props.fetchCustomers();
      this.table = $(this.refs.main).DataTable({
        aaSorting: [],
        columns: [
          {
            data: 'customerName'
          },
          {
            data: 'customerName',
            className: ' dt-center',
            width: '80px',
            orderable: false,
            render: (data, type, row, meta) => {
              return '<a href="#">Edit</a>';
            }
          },
          {
            data: 'customerName',
            className: 'dt-center',
            width: '80px',
            orderable: false,
            render: (data, type, row, meta) => {
              return '<a href="#">Delete</a>';
            }
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
          <h1>CustomersList</h1>
          <table ref="main" className="uk-table uk-table-hover uk-table-striped">
          <thead>
            <tr>
                <th scope="col">Customer Name</th>
                <th scope="col"></th>
                <th scope="col"></th>
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
  const {getCustomer, isLoading, isError} = filterCustomers();
  return {
    customerOrders: getCustomer(state).toJS(),
      isLoading: isLoading(state),
      isError: isError(state)
  };
};

CustomersList.propTypes = {
  customerOrders: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

CustomersList.defaultProps = {
  customerOrders: [],
  isLoading: true,
  isError: false,
};

export default connect(mapStateToProps, {fetchCustomers})(CustomersList);
