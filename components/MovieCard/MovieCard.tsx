// Libraries
import React from "react";
import cx from "classnames";

// Functions
import FavoriteButton from "components/FavoriteButton";
import { IMovie } from "./IMovieData";
import parseDate from "utils/parseDate";

// Styles
import styles from "./MovieCard.module.css";

interface IMovieProps {
  movie: IMovie;
  variant: "details" | "grid" | "list";
}

export default function MovieCard({ movie, variant }: IMovieProps) {
  console.log("Moviecard");
  return (
    <div
      className={cx([styles.card, styles[`card__${variant}`]])}
      key={movie.id}
    >
      {/* Left Container */}
      <div className={cx([styles.subcontainer, styles.subcontainer__column])}>
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " Poster"}
          className={styles.poster}
        />

        {variant == "details" && (
          <a className={styles.linkbutton} href={movie.homepage}>
            Watch Now
          </a>
        )}

        <FavoriteButton
          id={movie.id}
          variant={variant == "details" ? "text" : "icon"}
        />
      </div>

      {/* Right Container */}
      <div className={cx([styles.subcontainer, styles.subcontainer__column])}>
        <p
          className={cx([
            styles.title,
            styles[`title__${variant}`],
            { [styles.spacing]: variant == "details" },
          ])}
        >
          {movie.title}
        </p>

        {variant == "details" && (
          <p className={styles.subtitle}>
            Rating: {movie.vote_average}/10 ({movie.vote_count} reviews)
          </p>
        )}

        {variant == "details" && (
          <p
            className={cx([
              styles.text,
              { [styles.spacing]: variant == "details" },
            ])}
          >
            {movie.overview}
          </p>
        )}

        {variant == "details" && (
          <p
            className={cx([
              styles.subtitle,
              { [styles.spacing]: variant == "details" },
            ])}
          >
            Release Date: {movie.release_date && parseDate(movie.release_date)}
          </p>
        )}

        {/* <div className={cx([styles.subcontainer, styles.subcontainer__row])}>
          <div
            className={cx([styles.subcontainer, styles.subcontainer__column])}
          >
            <div
              className={cx([styles.subcontainer, styles.subcontainer__row])}
            >
              movie.genres.map((genre) => (
                <p className={styles.subtitle} key={genre.id}>
                  {genre.name}
                </p>
              ))
            </div>
          </div>

          <div className={styles.prodcontainer}>
            <p className={styles.movieprod}>Production: </p>
            {movie.production_companies.map((prod) => (
              <p className={styles.moviedata} key={prod.id}>
                {prod.name}
              </p>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  ); // End Return
}
