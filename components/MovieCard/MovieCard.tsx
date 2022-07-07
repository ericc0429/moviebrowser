// Libraries
import React from "react";
import Link from "next/link";
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
  return (
    <div
      className={cx([styles.card, styles[`card__${variant}`]])}
      key={movie.id}
    >
      {/* Left Container */}
      <div className={cx([styles.subcontainer, styles.subcontainer__column])}>
        {variant != "details" ? (
          <Link href={"/movie/".concat(movie.id.toString())}>
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + " Poster"}
              className={styles.poster}
            />
          </Link>
        ) : (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + " Poster"}
            className={styles.poster}
          />
        )}

        {variant == "details" && (
          <a className={styles.linkbutton} href={movie.homepage}>
            Watch Now
          </a>
        )}

        {variant == "details" && (
          <FavoriteButton id={movie.id} variant={"text"} />
        )}
      </div>

      {/* Right Container */}
      <div className={cx([styles.subcontainer, styles.subcontainer__column])}>
        {variant != "details" && (
          <Link href={"/movie/".concat(movie.id.toString())}>
            <p className={cx([styles.title, styles[`title__${variant}`]])}>
              {movie.title}
            </p>
          </Link>
        )}
        {variant == "details" && (
          <p
            className={cx([
              styles.title,
              styles[`title__${variant}`],
              { [styles.spacing]: variant == "details" },
            ])}
          >
            {movie.title}
          </p>
        )}

        {variant != "details" && (
          <FavoriteButton id={movie.id} variant={"icon"} />
        )}

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
      </div>
    </div>
  ); // End Return
}
