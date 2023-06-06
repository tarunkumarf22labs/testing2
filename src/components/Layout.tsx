import Head from "next/head";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
  title: string;
}

export default function Layout({ title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        {/* <Footer /> */}
      </div>
    </>
  );
}
                               