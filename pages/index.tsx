import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => {
  return (
    <Layout title="SWAG |  Open Sauced">
      <section className="lg:m-20">
        <ul className="flex flex-col justify-center items-center lg:justify-start lg:items-start sm:flex-row lg:space-x-12">
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
                <img style={{borderRadius: 10}} src="/pizza.png" />
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage
