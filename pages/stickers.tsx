import {NextPage} from "next";
import Layout from "../components/Layout";

import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import Products from "../components/Products";

const DonatePage: NextPage = () => {
  return (
    <Layout title="Stickers | Open Sauced">
      <div className="page-container">
        <Cart>
          <Products />
          <CartSummary />
        </Cart>
      </div>
    </Layout>
  );
};

export default DonatePage;
