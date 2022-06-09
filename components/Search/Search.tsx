import React, { useState } from 'react';

import { Trending } from '../Trending';

import styles from './Search.module.css';


export default function Search() {

    const [ query, setQuery ] = useState( "" );

    const [ movies, setMovies ] = useState( [] );

    const api_key="6c0d3427fcf17ddf80d04106c35a3a98";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${ api_key }&query=${ query }`;

    const searchMovies = async ( e ) => {

        e.preventDefault();

        console.log( "submitting..." );

        try {
            const res = await fetch( url );
            const data = await res.json();
            console.log( data.results );
            setMovies( data.results );
        }
        catch( err ) {
            console.error( err );
        }
        
    }

    return (
        <div>

            <main className={ styles.main }>

                <form
                    className={ styles.search }
                    onSubmit={ searchMovies }
                >

                    <input
                        type="text"
                        className={ styles.input }
                        placeholder="movie"
                        value={ query }
                        onChange={ ( e ) => setQuery( e.target.value ) }
                    />

                    <button
                        type="submit"
                        className={ styles.button }
                    >Search</button>

                </form>

                <div className={ styles.movielist }>

                    { movies.filter( movie => movie.poster_path ).map( movie => (
                        <div className={ styles.moviecard }>
                            
                            <img
                                key={ movie.id }
                                src={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${ movie.poster_path }` }
                                alt={ movie.title + " Poster" }
                            />

                            <div className={ styles.moviedata }>
                                <h3>{ movie.title }</h3>
                                <p><small>Release Date: { movie.release_date }</small></p>
                                <p><small>Rating: { movie.vote_average }</small></p>
                            </div>
                            <p className={ styles.moviedesc }>{ movie.overview }</p>


                        </div>
                    ) ) }

                </div>

                <div className={ styles.trending }>Now Trending</div>

                <Trending />
                

            </main>
      </div>
    ); // End return
  
}
