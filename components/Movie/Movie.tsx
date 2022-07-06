// Libraries
import React from "react";

// Functions
import { FavoriteButton } from "components/FavoriteButton";
import parseDate from "utils/parseDate";

// Styles
import styles from "components/Movie/Movie.module.css";

interface IMovieProps {
  moviedata: string;
}

export default function Movie({ moviedata }: IMovieProps) {
  const movie = JSON.parse(moviedata);

  return (
    <main>
      <div className={styles.container} key={movie.id}>
        <div className={styles.subflexcol}>
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + " Poster"}
            className={styles.poster}
          />

          <a className={styles.linkbutton} href={movie.homepage}>
            Watch Now
          </a>

          <FavoriteButton id={movie.id} variant={"text"} />
        </div>

        <div className={styles.moviecontainer}>
          <div className={styles.flexrow}>
            <p className={styles.movietitle}>{movie.title}</p>
            <p className={styles.movieid}>{movie.id}</p>
          </div>

          <p className={styles.movierating}>
            Rating: {movie.vote_average}/10 ({movie.vote_count} reviews)
          </p>

          <p className={styles.moviedesc}>{movie.overview}</p>

          <div className={styles.subflexrow}>
            <div className={styles.subflexcol}>
              <p className={styles.moviedata}>
                Release Date:{" "}
                {movie.release_date && parseDate(movie.release_date)}
              </p>

              <div className={styles.flexrow}>
                {movie.genres.map((genre) => (
                  <p className={styles.moviegenre} key={genre.id}>
                    {genre.name}
                  </p>
                ))}
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
          </div>
        </div>
      </div>
    </main>
  ); // End Return
}
