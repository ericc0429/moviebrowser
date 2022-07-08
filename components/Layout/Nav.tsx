// Libraries
import React from "react";
import Link from "next/link";

// Components
import { SearchButton } from "components/Searchbar";

// Styles
import styles from "./Layout.module.css";

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <Link href="/movie">
        <a className={styles.navcard}>Trending Movies</a>
      </Link>

      <SearchButton />
    </div>
  ); // End return
}
