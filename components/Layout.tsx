import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children: ReactNode,
  title?: string,
};

const Layout = ({ children, title = "TypeScript Next.js Stripe Example" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Open Sauced | SWAG Shop" />
      <meta property="og:image" content="https://swag.opensauced.pizza/social_card.png" />

      <meta property="og:description" content="Our mission is to build a welcoming community for those looking to participate in open-source. Represent your path into open-source with a pizza sticker." />
      <meta property="og:url" content="https://swag.opensauced.pizza" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bdougieYO" />
      <meta name="twitter:title" content="Open Sauced | SWAG Shop" />
      <meta name="twitter:description" content="Represent your path into open-source with a pizza sticker." />
      <meta name="twitter:image" content="https://swag.opensauced.pizza/social_card.png" />
    </Head>
    <div className="h-screen w-full flex flex-col lg:flex-row">
      <header className="flex flex-col justify-between p-4">
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-red-saucy to-red-dark">🍕 <span>SWAG</span></h1>
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
      <main className="flex-1">
        {children}
      </main>
    </div>
  </>
);

export default Layout;
