import React, {Component} from 'react';
//import '../../../css/Main/hfMain.css';

class Pricing extends Component {
  
  render(){

    return(
      <div>
          <h1>
            Pricing
          </h1>
          <h4>
            Woth our variety of plans you can select based on your requirement. Also you are allowed to upgrade at any time.
          </h4>
          <div className="pricing">
            <div className="uk-child-width-1-3@s uk-grid-match uk-grid"  uk-grid="true">
              <div>
                  <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                      <h3 className="uk-card-title uk-align-center">Basic</h3>
                      <ul className="uk-list uk-list-divider">
                              <li>Max Products: 20</li>
                              <li>Max Customer Profiles: 20</li>
                              <li>Something else: N.A</li>
                              <li>Something else: N.A</li>
                              <li>Something else: N.A</li>
                              <li>Tech Supprt: N/A</li>
                      </ul>
                      <button className="uk-button uk-button-primary uk-button-large uk-align-center">Select</button>
                  </div>
              </div>
              <div>
                  <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                      <h3 className="uk-card-title uk-align-center">Basic Plus</h3>
                      <ul className="uk-list uk-list-divider">
                              <li>Max Products: 20</li>
                              <li>Max Customer Profiles: 20</li>
                              <li>Something else: N.A</li>
                              <li>Something else: N.A</li>
                              <li>Something else: N.A</li>
                              <li>Tech Supprt: N/A</li>
                      </ul>
                      <button className="uk-button uk-button-primary uk-button-large uk-align-center">Select</button>
                  </div>
              </div>
              <div>
                  <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                      <h3 className="uk-card-title uk-align-center">Premium</h3>
                      <ul className="uk-list uk-list-divider">
                              <li>Max Products: 20</li>
                              <li>Max Customer Profiles: 20</li>
                              <li>Something else: N.A</li>
                              <li>Something else: N.A</li>
                              <li>Something else: N.A</li>
                              <li>Tech Supprt: N/A</li>
                      </ul>
                      <button className="uk-button uk-button-primary uk-button-large uk-align-center">Select</button>
                  </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Pricing;
