import React, {ReactNode} from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({children, title = "TypeScript Next.js Stripe Example"}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bdougieYO" />
      <meta name="twitter:title" content="Open Sauced Swag Shop" />
      <meta name="twitter:description" content="Swag for an open source community." />
      <meta name="twitter:image" content="https://nextjs-typescript-react-stripe-js.now.sh/social_card.png" />
    </Head>
    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <h1>🍕 SWAG</h1>
          </Link>
        </div>
      </header>
      {children}
    </div>
  </>
);

export default Layout;
