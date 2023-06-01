import React from 'react';
import ProductRow from './ProductRow';
import data from './../data.json';

function ProductTable({ query, inStock }) {
  console.log(data[0]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((product) => {
              const productNameMatches = query.toLowerCase() === '' || product.name.toLowerCase().includes(query);
              const inStockMatches = inStock ? product.inStock : true;
              return productNameMatches && inStockMatches;
            })
            .map((product, index) => (
              <ProductRow key={index} product={product} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
