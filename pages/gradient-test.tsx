import { NextPage } from 'next';
import Layout from '../components/Layout';

const GradientPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div>
        <header className="mb-16">
          <h1 className="text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Greetings from Tailwind v1.7.
            </span>
          </h1>
        </header>
        <div className="h-24 mb-20 bg-gradient-to-r from-orange-400 from-gold via-red-saucy to-red-dark">

        </div>
        <section>
          <div className="flex space-x-4 mb-8">
            <button type="button" className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-solid border-gray-400 rounded shadow">
              Regular
            </button>
            <button type="button" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-4 py-2 rounded shadow">
              Hover
            </button>
            <button type="button" className="bg-gradient-to-r from-teal-400 to-blue-500 focus:from-pink-500 focus:to-orange-500 text-white font-semibold px-4 py-2 rounded shadow">
              Focus
            </button>
          </div>
          <small className="block text-gray-600">
            Button <span className="bg-gray-200 text-gray-700 p-1">font-size</span> comes from <span className="bg-gray-200 text-gray-700 p-1">styles.css</span>
          </small>
        </section>
      </div>
    </Layout>
  );
};

export default GradientPage;
