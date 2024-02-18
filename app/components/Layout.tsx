import React from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: React.ReactNode;
  title?: string; // Optional title prop, with a default value set in defaultProps.
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Default Title' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/globals.css" />
        {/* Add other global scripts or links here */}
      </Head>
      <header>
        {/* Navigation bar content */}
        <nav>
          {/* Navigation links */}
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </>
  );
};

export default Layout;
