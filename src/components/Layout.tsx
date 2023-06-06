import Head from "next/head";
import React from "react";

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
      <div>{children}</div>
    </>
  );
}
