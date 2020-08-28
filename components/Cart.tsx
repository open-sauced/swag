import React, { ReactNode } from 'react';
import { CartProvider } from 'use-shopping-cart';
import getStripe from '../utils/get-stripejs';
import * as config from '../config';

const Cart = ({ children }: { children: ReactNode }) => (
  <CartProvider
    mode="checkout-session"
    stripe={getStripe()}
    currency={config.CURRENCY}
  >
    <div className="space-x-4 flex flex-auto">{children}</div>
  </CartProvider>
);

export default Cart;
