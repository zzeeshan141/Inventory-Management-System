import React, {Component} from 'react';
import LabelAndInput from './../UIControls/Form/LabelAndInput';
import LabelAndCombobox from './../UIControls/Form/LabelAndCombobox';
import csc from 'country-state-city';
import _ from 'lodash';

class SignUp extends Component {

  constructor(props){
    super(props);

    this.state = {
        fields: [],
        error: '',
        refData: {
          cities: []
        }
        
    }
    this.validateForm = this.validateForm.bind(this);
    this.contactSubmit = this.contactSubmit.bind(this);
    this.populateSecondaryItems = this.populateSecondaryItems.bind(this);
  }

  validateForm(fieldData)
  {
    let currentState = this.state;
    var index = _.findIndex(currentState.fields, {fieldName: fieldData.fieldName});
    if(index === -1)
      currentState.fields.push(fieldData);
    else
      currentState.fields.splice(index, 1, fieldData);

    this.setState({fields: currentState.fields});
  }

  populateSecondaryItems(criteria)
  {
    if(criteria.name === "city")
    {
      let cities = [];
      const states = csc.getStatesOfCountry(criteria.id);
      states.map(state => { return cities = [...cities, ...csc.getCitiesOfState(state.id)]; });
      this.state.refData.cities = cities;
    }
  }

  contactSubmit(e){
    e.preventDefault();
    
    const mendatoryFieldsCount = 7; 
    if(this.state.fields.length < mendatoryFieldsCount)
    {
      this.setState({error: "Fields with * are require."});
      return;
    }

    if(this.state.fields.length >= mendatoryFieldsCount && !this.state.fields.every((field) => {return field.isValid}))
    {
      this.setState({error: "Please correct the highlighted fields."});
      return;
    }

    const pwd = this.state.fields.find((field) => {return field.fieldName === "pwd"});
    const cnfPwd = this.state.fields.find((field) => {return field.fieldName === "cnfPwd"});

    if(pwd.value !== cnfPwd.value)
    {
      this.setState({error: "Passwords do not match."});
      return;
    }
  }
  
  render(){
    return (
        <div className="signup-main">
          <form className="uk-form-horizontal uk-margin-large" onSubmit= {this.contactSubmit.bind(this)}>
            <legend className="uk-legend uk-align-center signup-legend ">Create a New Account</legend>
            <LabelAndInput data={{fieldName: "fName", label: "First Name: *", placeholder: "First Name", 
            type:"text", required: true, pattern: /^[a-zA-Z]+$/, validateForm: this.validateForm}}/>
            <LabelAndInput data={{fieldName: "lName", label: "Last Name: *", placeholder: "Last Name", 
            type:"text", required: true, pattern: /^[a-zA-Z]+$/, validateForm: this.validateForm}}/>
            <LabelAndInput data={{fieldName: "email", label: "Email: *", placeholder: "example@abc.com", 
            type:"email", required: true, pattern: '', validateForm: this.validateForm}}/>
            <LabelAndInput data={{fieldName: "pwd", label: "Password: *", placeholder: "Password", 
            type:"password", required: true, pattern: "",  validateForm: this.validateForm}}/>
            <LabelAndInput data={{fieldName: "cnfPwd", label: "Confirm Password: *", placeholder: "Confirm Password", 
            type:"password", required: true, pattern: '',  validateForm: this.validateForm}}/>
            <LabelAndInput data={{fieldName: "address", label: "Address: ", placeholder: "Address", 
            type:"text", required: false, pattern: '',  validateForm: this.validateForm}}/>
            <LabelAndInput data={{fieldName: "contact", label: "Contact: ", placeholder: "Contact",
            type:"text", required: false, pattern: '', validateForm: this.validateForm}}/>
            
            <LabelAndCombobox data={{fieldName: "country", label: "Country: *", placeholder: "", 
            required: true, items: csc.getAllCountries(), validateForm: this.validateForm, 
            populateSecondaryItems: this.populateSecondaryItems}}/>
            <LabelAndCombobox data={{fieldName: "city", label: "City: *", placeholder: "", 
            required: true, items: this.state.refData.cities, validateForm: this.validateForm, 
            populateSecondaryItems: this.populateSecondaryItems}}/>
            
            <div className="signup-form-error-div">  
              
              <button className="uk-button uk-button-primary signup-submit" type="submit">Create Account</button>
              <p className="signup-form-error">{this.state.error}</p>
            </div>

          </form>
          
        </div>
      );
    }
  
}

export default SignUp;
