import Head from 'next/head';
import React, { useContext } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { AppContext } from 'src/Context';
import Login from 'src/stories/Login';

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
  const {showLoginPopup} = useContext(AppContext);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header animateHeader={animateHeader} />
        {
          showLoginPopup && 
        <Login />
         }
        {children}
        <Footer />
      </div>
    </>
  );
}
