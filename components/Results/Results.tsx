// Libraries
import React from "react";
import Link from "next/link";

// Functions
import FavoriteButton from "components/FavoriteButton";
import { IMovieListProps } from "components/MovieCard";

// Styles
import trendcss from "components/Trending/Trending.module.css";
import searchcss from "components/Search/Search.module.css";

function Results({ movies }: IMovieListProps, isTrend: boolean) {
  let customStyles = searchcss;

  if (isTrend) {
    customStyles = trendcss;
  }

  return (
    <div className={customStyles.movielist}>
      {movies &&
        movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className={customStyles.moviecard} key={movie.id}>
              <Link href={"/movie/".concat(movie.id.toString())}>
                <div className={customStyles.movieattributes}>
                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + " Poster"}
                    className={customStyles.poster}
                  />

                  {getMovieData(movie, isTrend, customStyles)}
                </div>
              </Link>

              <FavoriteButton id={movie.id} variant={"icon"} />
            </div>
          ))}
    </div>
  );
}

function getMovieData(movie, isTrend, _styles) {
  if (isTrend) {
    return (
      <div className={_styles.moviedata}>
        <p className={_styles.title}>{movie.title}</p>
      </div>
    ); // End Return
  } else {
    return (
      <div className={_styles.moviedata}>
        <p className={_styles.title}>{movie.title}</p>
        <p className={_styles.details}>Release Date: {movie.release_date}</p>
        <p className={_styles.details}>Rating: {movie.vote_average}</p>
        <p className={_styles.desc}>{movie.overview}</p>
      </div>
    ); // End Return
  }
}

export default Results;
