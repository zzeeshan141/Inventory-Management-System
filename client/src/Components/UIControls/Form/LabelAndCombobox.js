import React, {Component} from 'react';

class LabelAndCombobox extends Component {
  constructor(props){
    super(props);
    this.textSelectRef = React.createRef();
    this.state = {
      fieldName: this.props.data.fieldName,
      value: '',
      errors: [],
      isValid: true
    }
  }

  handleValidation(){
    let errors = [];
    if(this.props.data.required)
    {
      if(typeof this.textSelectRef.current.selectedOptions == 'undefined'){
        errors.push("Select valid option.");
      }
      if(typeof this.textSelectRef.current.selectedOptions != 'undefined' && this.textSelectRef.current.selectedOptions.length != 1){
        errors.push("Select valid option.");
      }
    }
    return errors;
  }

  handleChange(field, e){   
    let selectedItem = e.target.selectedOptions;
    if(typeof selectedItem != 'undefined' && selectedItem.length === 1)
    {
      let currentState = this.state;
      let errors = this.handleValidation();
      currentState.value = selectedItem[0].text;
      currentState.isValid = errors.length === 0;
      currentState.errors = errors;
      this.setState(currentState);

      if(this.state.fieldName === "country" && typeof this.props.data.populateSecondaryItems != 'undefined')
        this.props.data.populateSecondaryItems({name: 'city', id: selectedItem[0].value});
      this.props.data.validateForm(this.state);
    }
  }

  renderList(){
    if(this.props.data.items.length > 0)
    {
      return this.props.data.items.map(item => {
        return(
          <option key={item.id} value={item.id}>{item.name}</option>
        );
      });
    }  
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
            <div className="uk-margin">
                <div className="uk-form-controls">
                    <select className={this.state.isValid ? "uk-select signup-form-select" : "uk-select uk-form-danger signup-form-select"}
                    id="form-horizontal-select" 
                    ref={this.textSelectRef}
                    required={this.props.data.required} 
                    type={this.props.data.type} 
                    placeholder={this.props.data.placeholder} 
                    onChange={this.handleChange.bind(this, this.textSelectRef)} 
                    text={this.state.value}>
                      <option key={-1} value={-1}>Select Option</option>
                      {this.renderList()}
                    </select>
                    <span>
                      <ul className="signup-form-error-list" >
                        {this.renderErrors(this.state.errors)}
                      </ul>
                    </span>
                </div>
              </div>
        </div>
    );
  }
}

export default LabelAndCombobox;
