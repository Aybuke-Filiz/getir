
import Products from "../api/products.json"
import { useState } from "react";
import { useEffect } from "react";
import ProductItem from "./ui/ProductItem";
import Title from "./ui/Title";

function Favorites() {

const [products,setProducts]=useState([]);

useEffect(() => {
  setProducts(Products);
}, [])

return (
  <div className="container mx-auto">
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
          {products.length && products.map(product => <ProductItem key={product.id} product={product} />)}
      </div>
  </div>
)
}

export default Favorites