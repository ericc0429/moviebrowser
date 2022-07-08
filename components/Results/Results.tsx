// Libraries
import React from "react";

// Functions
import MovieList from "components/MovieList";
import { IMovie } from "components/MovieCard";

// Styles
import styles from "./Results.module.css";

interface IResultsProps {
  movies: IMovie[];
  title: string;
}

function Results({ movies, title }: IResultsProps) {
  return (
    <main className={styles.main}>
      <div className={styles.titleBar}>
        <p className={styles.title}>{title}</p>
      </div>

      <MovieList movies={movies} variant={"grid"} />
    </main>
  ); // End Return
}

export default React.memo(Results);
