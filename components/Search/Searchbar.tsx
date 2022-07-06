// Libraries
import React, { useState } from "react";
import { useRouter } from "next/router";

// Styles
import styles from "./Searchbar.module.css";

function Searchbar() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Movie"
        value={query}
        autoFocus
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit" className={styles.searchBtn}>
        Search
      </button>
    </form>
  );
}

export default Searchbar;
