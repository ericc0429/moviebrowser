// Libraries
import React, { useState } from "react";

// Functions
import { Results } from "components/Results";

// Styles
import styles from "./Searchbar.module.css";
import Link from "next/link";

// API data
const api_key = "6c0d3427fcf17ddf80d04106c35a3a98";
const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

function Searchbar() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  // Search function
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
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link href={"/search/".concat(query)}>
        <p className={styles.searchBtn}>Search</p>
      </Link>
    </div>
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
