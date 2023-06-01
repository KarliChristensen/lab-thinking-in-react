import React, { useState } from "react";
import Searchbar from "./Searchbar";
import ProductTable from "./ProductTable";
import data from './../data.json';

function ProductsPage() {
    const [products, setProducts] = useState(data);
  return (
    <div>
    <h1>IronStore</h1>
    <Searchbar />
    <ProductTable  />
    </div>
  )
}

export default ProductsPage