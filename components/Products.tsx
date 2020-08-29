import React from "react";

import products from "../data/products.json";
import {useShoppingCart, formatCurrencyString} from "use-shopping-cart";

const Products = () => {
  const {addItem, removeItem} = useShoppingCart();

  return (
    <section className="products sm:flex-col">
      {products.map(product => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={product.sku}>
          <img className="w-full" src={product.image} alt={product.name} />
          <div className="px-6 py-4">
            <p className="text-sm text-darkgrey flex items-center">
              <h2 className="font-bold text-xl mb-2">{product.name}</h2>
              <p className="text-xl m-2">
                {formatCurrencyString({
                  value: product.price,
                  currency: product.currency,
                })}
              </p>
            </p>
            <p className="text-lightgrey text-base">{product.description}</p>
          </div>
          <div className="mb-2 flex">
            <button
              className="w-1/2 m-2 min-h-full text-xs bg-greenblue-light hover:bg-greenblue-dark text-white font-bold py-2 px-4 rounded"
              onClick={() => addItem(product)}>
              Add to cart
            </button>
            <button style={{color: "#8b8b8b"}}
              className="w-1/2 m-2 min-h-full border-solid border-2
              border-gray-400 text-xs bg-white hover:bg-gray-400
              font-bold py-2 px-4 rounded"
              onClick={() => removeItem(product.sku)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
