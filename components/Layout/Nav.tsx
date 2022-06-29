// Libraries
import React from "react";
import Link from "next/link";

// Styles
import styles from "./Layout.module.css";

export default function Nav() {
  console.log("Load Nav");
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.navcard}>Home</a>
      </Link>

      <Link href="/movie">
        <a className={styles.navcard}>Trending Movies</a>
      </Link>

      <Link href="/search">
        <a className={styles.navcard}>Search</a>
      </Link>
    </div>
  ); // End return
}

//export default React.memo(Nav);
