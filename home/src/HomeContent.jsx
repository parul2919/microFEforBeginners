import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getProducts, currency } from "./products";
// import { addToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
  // const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="gap-5 d-flex flex-wrap">
      {products && products.map((product) => (
        <div key={product.id} className="product-wrapper d-flex">

            <img src={product.image} alt={product.name} className="product-images"/>

          <div className="flex">
            <div className="flex-grow font-bold">

                <a>{product.name}</a>

            </div>
            <div className="flex-end">Price : {currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
          
        </div>
      ))}
    </div>
  );
}


/*
{loggedIn && (
  <div className="text-right mt-2">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
      onClick={() => addToCart(product.id)}
      id={`addtocart_${product.id}`}
    >
      Add to Cart
    </button>
  </div>
)}
*/