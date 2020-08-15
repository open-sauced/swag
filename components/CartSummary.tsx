import React, {useState, useEffect} from "react";

import StripeTestCards from "../components/StripeTestCards";

import {useShoppingCart} from "use-shopping-cart";
import {fetchPostJSON} from "../utils/api-helpers";

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  const {formattedTotalPrice, cartCount, clearCart, cartDetails, redirectToCheckout} = useShoppingCart();

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    setLoading(true);

    const response = await fetchPostJSON("/api/checkout_sessions/cart", cartDetails);

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    redirectToCheckout({sessionId: response.id});
  };

  return (
    <form onSubmit={handleCheckout}>
      <h2>Cart summary</h2>
      {/* This is where we'll render our cart */}
      <p suppressHydrationWarning>
        <strong>Number of Items:</strong> {cartCount}
      </p>
      <p suppressHydrationWarning>
        <strong>Total:</strong> {formattedTotalPrice}
      </p>

      <div class="mb-2 flex">
        <button
          class="w-1/2 mr-2 mt-2 min-h-full text-xs bg-green hover:bg-darkgreen text-white font-bold rounded"
          type="submit"
          disabled={cartEmpty || loading}>
          Checkout
        </button>
        <button
          class="w-1/2 mt-2 ml-2 min-h-full text-xs border-grey bg-gold hover:bg-cheesyyellow hover:text-white font-bold rounded"
          type="button"
          onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </form>
  );
};

export default CartSummary;
