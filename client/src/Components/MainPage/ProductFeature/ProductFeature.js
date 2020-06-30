import React, {Component} from 'react';
import imgProduct from './../../../images/product.png';
import imgStock from './../../../images/stock.png';
import imgOrder from './../../../images/order.png';
import imgReport from './../../../images/report.png';

class ProductFeature extends Component {
  
  render(){

    return(
      <div className="main-product-feature">
          <h1>
            What you can do
          </h1>
          <h4>
            With this great web you can manager your products stocks and order. You can view reports and view your product sales to increase profits. 
          </h4>
          <div className="uk-child-width-1-4@m uk-grid">
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                        <img src={imgProduct} alt=""></img>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Manage Products</h3>
                        <p>Easily manage your products by smart and quick editing functionalities.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                        <img src={imgStock} alt=""></img>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Manage Stocks</h3>
                        <p>Easily manage your product stock/inventory by smart and quick editing functionalities.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                        <img src={imgOrder} alt=""></img>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Manage Orders</h3>
                        <p>Easily manage your customer orders and their delivery system by smart and quick functionalities.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                        <img src={imgReport} alt=""></img>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">View Sales</h3>
                        <p>Easily view you sales to increase profits by smart and quick editing functionalities.</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ProductFeature;
