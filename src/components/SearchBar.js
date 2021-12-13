import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type= "text"/>
        <p>
          <input
            id="inStock"
            type= "checkbox"
          />
          <label htmlFor="inStock">Only show products in stock</label>
        </p>
      </form>
    )
  };
};

export default SearchBar;
