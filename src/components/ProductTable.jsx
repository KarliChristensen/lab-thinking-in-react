import React from 'react';
import ProductRow from './ProductRow';
import data from './../data.json';

function ProductTable({ query }) {
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
              return query.toLowerCase() === ''
                ? product
                : product.name.toLowerCase().includes(query);
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
