import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'TypeScript Next.js Stripe Example',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bdougieYO" />
      <meta name="twitter:title" content="Open Sauced Swag Shop" />
      <meta
        name="twitter:description"
        content="Swag for an open source community."
      />
      <meta
        name="twitter:image"
        content="https://nextjs-typescript-react-stripe-js.now.sh/social_card.png"
      />
    </Head>
    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <img src="/logo.png" />
            </a>
          </Link>
          <h1>
            <span className="light">SWAG</span>
            <br />
            Open Sauced 🍕
          </h1>
        </div>
      </header>
      {children}
    </div>
    <div className="banner">
      <span>
        This is a{' '}
        <a
          href="https://github.com/stripe-samples"
          target="_blank"
          rel="noopener noreferrer"
        >
         sample site
        </a>
        .{' View code on '}
        <a
          href="https://github.com/open-sauced/swag"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </span>
    </div>
  </>
);

export default Layout;
