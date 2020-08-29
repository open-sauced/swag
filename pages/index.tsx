import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <ul className="card-list">
        <li>
          <Link href="/donate">
            <a className="card checkout-style-background">
              <h2 className="bottom">Donate</h2>
              <img src="/checkout-one-time-payments.svg" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/stickers">
            <a className="card cart-style-background">
              <h2 className="bottom">Stickers</h2>
              <img style={{borderRadius: 10}} src="/pizza.jpg" />
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage
