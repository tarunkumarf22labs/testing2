import Head from "next/head";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
  title: string;
  children?: React.ReactElement;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
