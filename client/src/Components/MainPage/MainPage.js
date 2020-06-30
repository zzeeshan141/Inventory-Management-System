import React, {Component} from 'react';
import Slider from '../MainPage/Slider/Slider';
import ProductFeature from '../MainPage/ProductFeature/ProductFeature';
import Pricing from '../MainPage/Pricing/Pricing';
//import "../../css/Main/hfMain.css";


class MainPage extends Component {
  
  render(){
    
    return (
        <div className="main-page-container">
          <Slider />
          <ProductFeature />
          <Pricing />
        </div>
      );
    }
  
}

export default MainPage;
