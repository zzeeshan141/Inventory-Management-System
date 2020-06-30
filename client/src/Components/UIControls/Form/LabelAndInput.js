import React, {Component} from 'react';

class LabelAndInput extends Component {

  constructor(props){
    super(props);
    this.textInputRef = React.createRef();
    this.state = {
      fieldName: this.props.data.fieldName,
      //fieldRef: this.textInputRef,
      value: '',
      errors: [],
      isValid: true
    }
  }

 handleValidation(){
    let errors = [];
    if(this.props.data.required)
    {
      if(this.textInputRef.current.type === "text"){
        errors = [...errors, ...this.validateTextTypeInput()];
      }
      else if(this.textInputRef.current.type === "email"){
        errors = [...errors, ...this.validateEmailTypeInput()];
      }
      else if(this.textInputRef.current.type === "password"){
        errors = [...errors, ...this.validatePasswordTypeInput()];
      }
    }
    return errors;
  }

  validateTextTypeInput()
  {
    let errors = [];
    if(this.textInputRef.current.value === ''){
      errors.push("Cannot be empty.");
    }

    if(typeof this.textInputRef.current.value !== "undefined"){
      if(this.props.data.pattern != '' && !this.textInputRef.current.value.match(this.props.data.pattern)){
          errors.push("Letters only.");
        }        
    }
    return errors;
  }

  validateEmailTypeInput()
  {
    let errors = [];
    if(this.textInputRef.current.value === ''){
      errors.push("Cannot be empty.");
    }

    if(typeof this.textInputRef.current.value !== "undefined"){
        let lastAtPos = this.textInputRef.current.value.lastIndexOf('@');
        let lastDotPos = this.textInputRef.current.value.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.textInputRef.current.value.indexOf('@@') == -1 
          && lastDotPos > 2 && (this.textInputRef.current.value.length - lastDotPos) > 2)) 
        {
          errors.push("Email is not valid");
        }
    }
    return errors;
  }

  validatePasswordTypeInput()
  {
    let errors = [];
    if(this.textInputRef.current.value === ''){
      errors.push("Cannot be empty.");
    }
    if(this.textInputRef.current.value.length < 8){
      errors.push("Must have at least 8 characters.");
    }
    if(!this.textInputRef.current.value.match(/[a-z]/)){
      errors.push("Must have at least 1 lower case letter.");
    }
    if(!this.textInputRef.current.value.match(/[A-Z]/)){
      errors.push("Must have at least 1 upper case letter.");
    }
    if(!this.textInputRef.current.value.match(/[0-9]/)){
      errors.push("Must have at least 1 one number.");
    }
    return errors;
  }
  
  handleChange(field, e){   
    let currentState = this.state;
    let errors = this.handleValidation();
    currentState.value = e.target.value;
    currentState.isValid = errors.length === 0;
    currentState.errors = errors;
    this.setState(currentState);
    //if(errors.length === 0)
      this.props.data.validateForm(this.state);
  }
  
  renderErrors(errors)
  {
      return errors.map((error, i) => {
        return <li key={i}>{error}</li>;
      });
  }
  
  render(){
    return(
        <div className="uk-margin">
            <label className="uk-form-label signup-form-label" htmlFor="form-horizontal-text">{this.props.data.label}</label>
            <div className="uk-form-controls">  
                <input className={this.state.isValid ? "uk-input signup-form-input" : "uk-input uk-form-danger signup-form-input"}
                id="form-horizontal-text" 
                ref={this.textInputRef}
                required={this.props.data.required} 
                type={this.props.data.type} 
                placeholder={this.props.data.placeholder} 
                onChange={this.handleChange.bind(this, this.textInputRef)} 
                value={this.state.value}/>
                <span>
                  <ul className="signup-form-error-list" >
                    {this.renderErrors(this.state.errors)}
                  </ul>
                </span>
            </div>
        </div>
    );
  }
}

export default LabelAndInput;
