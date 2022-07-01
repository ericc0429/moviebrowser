// Libraries
import React from "react";
import Link from "next/link";

// Components
import { Search } from "components/Search/";

// Styles
import styles from "./Layout.module.css";

export default function Nav() {
  console.log("Load Nav");
  return (
    <div className={styles.navbar}>
      <Link href="/movie">
        <a className={styles.navcard}>Trending Movies</a>
      </Link>

      <Search />

      {/* <Link href="/search">
        <a className={styles.navcard}>Search</a>
      </Link> */}
    </div>
  ); // End return
}

//export default React.memo(Nav);
