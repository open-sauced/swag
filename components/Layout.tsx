import React, {ReactNode} from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children: ReactNode,
  title?: string,
};

const Layout = ({children, title = "TypeScript Next.js Stripe Example"}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bdougieYO" />
      <meta name="twitter:title" content="Open Sauced | SWAG and Sticker Shop" />
      <meta name="twitter:description" content="SWAG for the opensauced.pizza
      community. Represent your path into open-source with a pizza." />
      <meta name="twitter:image" content="https://swag.opensauced.pizza/social_card.png" />
    </Head>
    <div className="container sm:flex-col">
      <header className="sm:flex-none">
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <h1  className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-red-saucy to-red-dark">🍕 <span>SWAG</span></h1>
            </a>
          </Link>
          <p>
            <span> Powered by the</span>{" "}
            <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a> library.
          </p>
        </div>
        <div className="links">
        <ul>
        <li><a href="https://opensauced.pizza">opensauced.pizza</a></li>
        <li><a href="https://dev.to/opensauced">blog</a></li>
        <li><a href="https://github.com/open-sauced">github</a></li>
        </ul>
        </div>
      </header>
      {children}
    </div>
  </>
);

export default Layout;
