// Libraries
import React, { useState } from "react";
import { useRouter } from "next/router";

// Functions
import { Results } from "components/Results";

// Styles
import styles from "./Searchbar.module.css";

function Searchbar() {
  const [query, setQuery] = useState("");

  // const [movies, setMovies] = useState([]);

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

/* <>
      <form className={styles.search} onSubmit={searchMovies}>
        <input
          type="text"
          className={styles.input}
          placeholder="Movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Link href={"/search/".concat(query)}>SearchTest</Link>

        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>

      <Results movies={movies} isTrend={false} />
    </> */

/* // Search function
  const searchMovies = async (e) => {
    e.preventDefault(); // Prevents search from resetting near instantly

    try {
      if (query.length > 0) {
        const url = api_url.concat(`&query=${query}`); // Concatenate the URL with query input
        console.log("-- Submitting Search Query --"); // Debugging purposes
        const res = await fetch(url); // Stores the results from API fetch into res
        const data = await res.json(); // Parses into JSON format
        setMovies(data.results); // Stores the results of the API fetch response into movies array
      } else {
        console.log("-- No Query Provided --"); // Debugging purposes
        setMovies(undefined);
      }
    } catch (err) {
      console.error(err);
    }
  }; // End searchMovies */
