import React, {Component} from 'react';

class Product extends Component {
  
  render(){

    return(
        <div key={this.props.data.product.id} className="product-card-main">
            <div className="card-media-top">
            <a href="#"><img src={this.props.data.product.image} alt="" /></a>
            </div>
            <div className="card-body">
                <a className="" href="#"><p className="card-title">{this.props.data.product.name}</p></a>
                <p className="card-desription-price"><b>{this.props.data.product.priceUnit}. {this.props.data.product.price} </b></p>
                <p className="card-desription"><b>Status: </b>{this.props.data.product.availibility ? 'In Stock' : 'Out of Stock'}</p>
                <p className="card-desription"><b>Number In Stock: </b>{this.props.data.product.numberInStock}</p>
                <p className="card-desription"><b>Orders: </b>{this.props.data.product.orders}</p>
                <button className="uk-button uk-button-primary card-button">Sell</button>
            </div>
        </div>
    );
  }
}

export default Product;
