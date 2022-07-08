// Libraries
import cx from "classnames";
import Link from "next/link";

// Components
import { IMovieListProps } from "components/MovieCard";
import MovieCard from "components/MovieCard";

// Styles
import styles from "./MovieList.module.css";

export default function MovieCardList({ movies, variant }: IMovieListProps) {
  return (
    <div className={cx([styles.movielist, styles[`movielist__${variant}`]])}>
      {movies &&
        movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Link href={"/movie/".concat(movie.id.toString())} key={movie.id}>
              <a>
                <MovieCard movie={movie} variant={variant} />
              </a>
            </Link>
          ))}
    </div>
  );
}
