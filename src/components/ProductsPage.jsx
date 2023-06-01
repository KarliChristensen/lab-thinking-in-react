import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';
import data from './../data.json';

function ProductsPage() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <h1>IronStore</h1>
      <Searchbar query={query} setQuery={setQuery} />
      <ProductTable query={query} />
    </div>
  );
}

export default ProductsPage;
