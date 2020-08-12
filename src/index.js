import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {loadStripe} from "@stripe/stripe-js";
import {CartProvider} from "use-shopping-cart";

// Remember to add your public Stripe key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC);

ReactDOM.render(
  <React.StrictMode>
    <CartProvider
      stripe={stripePromise}
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}>
      <App />
    </CartProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
