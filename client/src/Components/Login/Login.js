import React, {Component} from 'react';
//import '../../css/Main/hfMain.css';

class Login extends Component {
  
  render(){
    
    return (
        <div className="login-main-div">
          <form>
            <fieldset className="uk-fieldset">

              <legend className="uk-legend">Log in</legend>
              <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Email" />
              </div>
              <div className="uk-margin">
                  <input className="uk-input" type="password" placeholder="Password" />
              </div>
              <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Login</button>
            </fieldset>
        </form>
        </div>
      );
    }
  
}

export default Login;
