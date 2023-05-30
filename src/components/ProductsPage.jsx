import React, { useState } from "react";
import data from './../data.json';

function ProductsPage() {
    const [products, setProducts] = useState(data);
    console.log(data)
  return (
    <div>
    <h1>Products Page</h1>
    </div>
  )
}

export default ProductsPage