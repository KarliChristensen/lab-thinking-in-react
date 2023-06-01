import React from 'react';
import ProductRow from './ProductRow';
import data from './../data.json';

function ProductTable({ query, inStock }) {
  console.log(data[0]);
  return (
    <div className="container mx-auto">
      <table className="table w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-gray-700">Name</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-700">Price</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((product) => {
              const productNameMatches =
                query.toLowerCase() === '' || product.name.toLowerCase().includes(query);
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
