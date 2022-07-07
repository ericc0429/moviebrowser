// Libraries
import Link from "next/link";
import cx from "classnames";

// Components
import { IMovieListProps } from "./IMovieData";
import MovieCard from "./MovieCard";

// Styles
import styles from "./MovieCard.module.css";

export default function MovieCardList({ movies, variant }: IMovieListProps) {
  return (
    <div className={cx([styles.movielist, styles[`movielist__${variant}`]])}>
      {movies &&
        movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div key={movie.id}>
              <Link href={"/movie/".concat(movie.id.toString())} key={movie.id}>
                <a>
                  <MovieCard movie={movie} variant={variant} />
                </a>
              </Link>
            </div>
          ))}
    </div>
  );
}
