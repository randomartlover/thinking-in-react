import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


class FilterableProductTable extends React.Component{
  render(){
    return (
      <div style={{"width": "50%", "margin": "auto", "marginTop": "100px"}}>
        <SearchBar />
        <ProductTable products={this.props.products}/>
      </div>
    )
  };
};

export default FilterableProductTable;
