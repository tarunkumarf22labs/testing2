import Head from 'next/head';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  title: string;
  animateHeader?: boolean;
  children?: React.ReactElement;
}

export default function Layout({
  title,
  children,
  animateHeader,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header animateHeader={animateHeader} />
        {children}
        <Footer />
      </div>
    </>
  );
}
