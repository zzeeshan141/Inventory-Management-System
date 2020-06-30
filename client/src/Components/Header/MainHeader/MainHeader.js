import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import './../../../css/Main/hfMain.css';

class MainHeaer extends Component {

  render(){

    return (
        <div>

          <nav className="uk-navbar-container uk-margin header-main">
            <div className="uk-navbar-left header-secondary" >
              <Link to='/' className="uk-navbar-item uk-logo header-font" >Logo</Link>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li><Link to='/inventory' className="uk-navbar-item header-font" >Inventory</Link></li>
                        <li><Link to='/customerorders' className="uk-navbar-item header-font" >Orders</Link></li>
                        <li><Link to='/report/salesreport' className="uk-navbar-item header-font" >Sales Report</Link></li>
                        <li><Link to='/customermain' className="uk-navbar-item header-font" >Customer</Link></li>
                        <li><Link to='/signup' className="uk-navbar-item header-font" >Sign Up</Link></li>
                        <li><Link to='/login' className="uk-navbar-item header-font">Login</Link></li>
                    </ul>
                </div>
            </div>
          </nav>
        </div>
      );
    }
  
}

export default MainHeaer;