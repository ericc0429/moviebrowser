import React, { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Home.module.css';
import resultscss from '/styles/Results.module.css';

import Header from '/components/Header.js';
import Nav from '/components/Nav.js';
import Footer from '/components/Footer.js';

export default function Home() {

    const [ query, setQuery ] = useState( "" );

    const [ movies, setMovies ] = useState( [] );

    const searchMovies = async ( e ) => {

        e.preventDefault();

        console.log( "submitting..." );

        const url = `https://api.themoviedb.org/3/search/movie?api_key=6c0d3427fcf17ddf80d04106c35a3a98&query=${ query }`;

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
                    className={ resultscss.search }
                    onSubmit={ searchMovies }
                >

                    <input
                        type="text"
                        className={ resultscss.input }
                        placeholder="movie"
                        value={ query }
                        onChange={ ( e ) => setQuery( e.target.value ) }
                    />

                    <button
                        type="submit"
                        className={ resultscss.button }
                    >Search</button>

                </form>

                <div className={ resultscss.movielist }>

                    { movies.filter( movie => movie.poster_path ).map( movie => (
                        <div className={ resultscss.moviecard }>
                            
                            <img
                                key={ movie.id }
                                src={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${ movie.poster_path }` }
                                alt={ movie.title + " Poster" }
                            />

                            <div className={ resultscss.moviedata }>
                                <h3>{ movie.title }</h3>
                                <p><small>Release Date: { movie.release_date }</small></p>
                                <p><small>Rating: { movie.vote_average }</small></p>
                            </div>
                            <p className={ resultscss.moviedesc }>{ movie.overview }</p>


                        </div>
                    ) ) }

                </div>
                

            </main>
      </div>
    ); // End return
  
}
