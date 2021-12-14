import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


class FilterableProductTable extends React.Component{
  constructor(props){
    super(props)
    this.state = {inStockOnly: false, filterText: ''}
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.onInStockChange = this.onInStockChange.bind(this);
  }

  onFilterTextChange(filterText) {
    this.setState({ filterText })
  };

  onInStockChange(inStockOnly){
    this.setState({inStockOnly})
  };

  render(){
    return (
      <div style={{"width": "50%", "margin": "auto", "marginTop": "100px"}}>
        <SearchBar
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          handleFilterTextChange={this.onFilterTextChange}
          handleInStockChange={this.onInStockChange}
          />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly = {this.state.inStockOnly}
        />
      </div>
    )
  };
};

export default FilterableProductTable;
