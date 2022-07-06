// Libraries
import React from "react";
import Head from "next/head";
import Link from "next/link";

// Components
import Nav from "./Nav";

// Styles
import styles from "./Layout.module.css";

function Header() {
  return (
    <header>
      <Head>
        <title>Movie Browser</title>
        <meta name="description" content="Search for your favorite movies" />
        <meta name="author" content="Eric Chen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.headerBar}>
        <div className={styles.header}>
          <Link href="/">
            <a className={styles.headerText}>Movie Browser</a>
          </Link>
        </div>

        <Nav />
      </div>
    </header>
  ); // End return
}

export default React.memo(Header);
