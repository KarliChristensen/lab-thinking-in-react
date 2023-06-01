import React from 'react';

const ProductRow = ({ product }) => {
  const { name, price, inStock } = product;

  const red = {
    color: 'red'
  };

  return (
    <tr>
      <td style={inStock ? null : red}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
