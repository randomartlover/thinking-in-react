import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange = (e) => {
    this.props.handleFilterTextChange(e.target.value);
  }

  handleInStockChange = (e) => {
    this.props.handleInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type= "text"
          placeholder='Search...'
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            id="inStock"
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          <label htmlFor="inStock">Only show products in stock</label>
        </p>
      </form>
    )
  };
};

export default SearchBar;
