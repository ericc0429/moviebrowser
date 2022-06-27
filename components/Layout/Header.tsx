// Libraries
import Head from "next/head";

// Styles
import styles from "./Layout.module.css";

export default function Header(/*  { pageName }: any  */) {
  return (
    <header>
      <Head>
        <title>Movie Browser{/*  - {pageName} */}</title>
        <meta name="description" content="Search for your favorite movies" />
        <meta name="author" content="Eric Chen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className={styles.header}>Movie Browser</p>
    </header>
  ); // End return
}
