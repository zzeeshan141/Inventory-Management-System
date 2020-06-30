import React, {Component} from 'react';

class SortByCombobox extends Component {
  constructor(props){
    super(props);
    this.textSelectRef = React.createRef();
    this.state = {
      fieldName: this.props.data.fieldName,
      item: {}
    }
  }

  handleChange(field, e){   
    let selectedItem = e.target.selectedOptions;
    if(typeof selectedItem != 'undefined' && selectedItem.length === 1)
    {
      let currentState = this.state;
      currentState.item = {id: selectedItem[0].value, name: selectedItem[0].text};
      this.setState(currentState);
      this.props.data.onChange(this.state);
    }
  }
  
  
    renderItems()
    {
        return this.props.data.items.map(item => {
            return (
                <option key={item.id} value={item.id}>{item.name}</option>
            );
        });
    }
  
  render(){

    return(
        <div className="uk-grid-collapse product-grid-top uk-grid" uk-grid="true">
        <div className="product-grid-top-left">
            <p>1811 products items found for "abcd"</p>
        </div>
        <div className="product-grid-top-right">
            <div className="product-grid-top-right-align-right">
            <label className="product-grid-sortby-label">Sort By: </label>
            <select className="uk-select product-grid-sortby-combo"
            ref={this.textSelectRef}
            onChange={this.handleChange.bind(this, this.textSelectRef)} >
                {this.renderItems()}
            </select>
            </div>
        </div>
    </div>
        
    );
  }
}

export default SortByCombobox;
