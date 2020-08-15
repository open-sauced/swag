import React from "react";

import products from "../data/products.json";
import {useShoppingCart, formatCurrencyString} from "use-shopping-cart";

const Products = () => {
  const {addItem, removeItem} = useShoppingCart();

  return (
    <section class="products">
      {products.map(product => (
        <div class="max-w-sm rounded overflow-hidden shadow-lg" key={product.sku}>
          <img class="w-full" src={product.image} alt={product.name} />
          <div class="px-6 py-4">
            <p class="text-sm text-darkgrey flex items-center">
              <h2 class="font-bold text-xl mb-2">{product.name}</h2>
              <p class="text-xl m-2">
                {formatCurrencyString({
                  value: product.price,
                  currency: product.currency,
                })}
              </p>
            </p>
            <p class="text-lightgrey text-base">{product.description}</p>
          </div>
          <div class="mb-2 flex">
            <button
              className="w-1/2 m-2 min-h-full text-xs bg-green hover:bg-darkgreen text-white font-bold py-2 px-4 rounded"
              onClick={() => addItem(product)}>
              Add to cart
            </button>
            <button
              className="w-1/2 m-2 min-h-full text-xs bg-gold hover:bg-cheesyyellow text-white font-bold py-2 px-4 rounded"
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
