import React from 'react';

const ProductRow = ({ product }) => {
  const { name, price } = product;
  const red = { color: 'red' };
  
  if (product.inStock === true) {
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td style={red}>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
};

export default ProductRow;
