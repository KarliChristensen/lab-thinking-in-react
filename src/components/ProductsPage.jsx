import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [query, setQuery] = useState('');
  const [inStock, setInStock] = useState(false)

  return (
    <div>
      <h1 className='text-9xl mb-20 mt-20' >IronStore</h1>
      <Searchbar query={query} setQuery={setQuery} setInStock={setInStock}/>
      <ProductTable query={query} inStock={inStock} setInStock={setInStock} />
    </div>
  );
}

export default ProductsPage;
