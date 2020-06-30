import React, {Component} from 'react';

class ProductGridPagenation extends Component {
  
  render(){

    return(
        <div className="product-grid-pageination">
            <ul className="uk-pagination uk-flex-center uk-margin" uk-margin="true">
                <li className="uk-active"><a href="#"><span className="uk-pagination-previous" uk-pagination-previous="true"></span></a></li>
                <li><a href="#">1</a></li>
                <li className="uk-disabled"><span>...</span></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                <li><span>7</span></li>
                <li><a href="#">8</a></li>
                <li><a href="#"><span className="uk-pagination-next" uk-pagination-next="true"></span></a></li>
            </ul>
        </div>
    );
  }
}

export default ProductGridPagenation;
