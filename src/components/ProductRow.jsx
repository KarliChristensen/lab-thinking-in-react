import React from 'react';

const ProductRow = ({ product }) => {
  const { name, price, inStock } = product;

  const stockStyle = inStock ? '' : 'text-red-500';

  return (
    <tr>
      <td className={`py-2 ${stockStyle}`}>{name}</td>
      <td className="py-2">{price}</td>
    </tr>
  );
};

export default ProductRow;
