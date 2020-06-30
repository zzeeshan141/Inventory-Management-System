import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import MainHeader from './Header/MainHeader/MainHeader';
import MainFooter from './Footer/MainFooter/MainFooter';
import history from '../history';
import SignUp from '../Components/SignUp/SignUp';
import Login from '../Components/Login/Login';
import MainPage from '../Components/MainPage/MainPage';
import ProductMain from './Product/ProductMain/ProductMain';
import CustomerOrdersMain from './CustomerOrder/CustomerOrdersMain/CustomerOrdersMain';
import CustomerMain from './Customer/CustomerMain/CustomerMain';
import SalesReport from './Reports/SalesReport/SalesReport';
import './../../node_modules/uikit/dist/css/uikit.css';
import './../css/Main/hfMain.css';
import UiKit from './../../node_modules/uikit/dist/js/uikit.js'; // Do not remove this line


class App extends Component { 
  
  componentDidMount() {
    
  }
  render(){

    return(
      <div>
         <Router history={history}>
            <div>
              <MainHeader />
                <Switch>
                    <Route path="/" exact component={MainPage}></Route>
                    <Route path="/signup" exact component={SignUp}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/inventory" exact component={ProductMain}></Route>
                    <Route path="/customerorders" exact component={CustomerOrdersMain}></Route>
                    <Route path="/customermain" exact component={CustomerMain}></Route>
                    <Route path="/report/salesreport" exact component={SalesReport}></Route>
                </Switch>
              <MainFooter />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
