// Libraries
import React, { useState, useEffect } from "react";

// Functions
import { Results } from "components/Results";

// Styles
import styles from "./Trending.module.css";

// API data
/* const api_key = "6c0d3427fcf17ddf80d04106c35a3a98";
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`; */

interface ITrendingProps {
  movies: Array<Object>;
}

function Trending({ movies }: ITrendingProps) {
  return (
    <main className={styles.main}>
      <div className={styles.titleBar}>
        <p className={styles.trending}>Now Trending</p>
      </div>

      <Results movies={movies} isTrend={true} />
    </main>
  ); // End Return
}

export default React.memo(Trending);
