// Libraries
import React, { useState } from 'react';

// Functions
import { Trending } from '../Trending';

// Styles
import styles from './Search.module.css';


// API data
const api_key="6c0d3427fcf17ddf80d04106c35a3a98";
const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${ api_key }`;

export default function Search() {

    const [ query, setQuery ] = useState( "" );

    const [ movies, setMovies ] = useState( [] );

    const append = `&query=${ query }`; // Add anything to be appended into URL here
    const url = api_url.concat( append ); // Concatenate the URL with whatever to be appended

    const searchMovies = async ( e ) => {

        e.preventDefault(); // Prevents search from resetting near instantly

        console.log( "-- Search Query Submitted --" ); // Debugging purposes

        try {
            const res = await fetch( url ); // Stores the results from API fetch into res
            const data = await res.json(); // Parses into JSON format
            console.log( data.results ); // Debugging purposes
            setMovies( data.results ); // Stores the results of the API fetch response into movies array
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
                        <div className={ styles.moviecard } key={ movie.id }>

                            { /* Look into using a render function to remove inline stuff */ }
                            
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
