// Libraries
import React from "react";

// Functions
import { Results } from "components/Results";
import { IMovie } from "components/MovieCard";

// Styles
import styles from "./Trending.module.css";

interface ITrendingProps {
  movies: IMovie[];
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
