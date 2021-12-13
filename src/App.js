import React from 'react';
import products from './products.json';
import FilterableProductTable from "./components/FilterableProductTable";

const App = () => {
  return <FilterableProductTable products={products}/>;
};

export default App;
