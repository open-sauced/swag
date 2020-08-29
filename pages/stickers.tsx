import {NextPage} from "next";
import Layout from "../components/Layout";

import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import Products from "../components/Products";

const DonatePage: NextPage = () => {
  return (
    <Layout title="Shopping Cart | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-red-saucy to-red-dark">
            Shopping Cart
          </span>
        </h1>
        <p>
          Powered by the <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a> React hooks library.
        </p>
        <Cart>
          <Products />
          <CartSummary />
        </Cart>
      </div>
    </Layout>
  );
};

export default DonatePage;
