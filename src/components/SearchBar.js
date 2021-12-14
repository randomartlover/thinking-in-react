import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
          type= "text"
          value={this.props.filterText}
        />
        <p>
          <input
            id="inStock"
            type="checkbox"
            checked={this.props.inStockOnly}
          />
          <label htmlFor="inStock">Only show products in stock</label>
        </p>
      </form>
    )
  };
};

export default SearchBar;
