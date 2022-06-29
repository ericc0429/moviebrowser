// Libraries
import React from "react";
import Head from "next/head";

// Components
import Nav from "./Nav";

// Styles
import styles from "./Layout.module.css";

function Header(/*  { pageName }: any  */) {
  console.log("Load Header");
  return (
    <header>
      <Head>
        <title>Movie Browser{/*  - {pageName} */}</title>
        <meta name="description" content="Search for your favorite movies" />
        <meta name="author" content="Eric Chen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className={styles.header}>Movie Browser</p>

      <Nav />
    </header>
  ); // End return
}

export default React.memo(Header);
