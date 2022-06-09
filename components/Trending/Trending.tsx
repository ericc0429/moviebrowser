import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import React, { useState, useEffect } from 'react';

import styles from './Trending.module.css';


export default function Trending() {

    const [ movies, setMovies ] = useState( [] );

    const api_key="6c0d3427fcf17ddf80d04106c35a3a98";
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${ api_key }`;

    const getTrending = async () => {
    // const getTrending = async ( e ) => {

        // e.preventDefault();

        // console.log( "submitting..." );

        try {
            const res = await fetch( url );
            const data = await res.json();
            console.log( data.results );
            setMovies( data.results );
        }
        catch( err ) {
            console.log( err );
        }

    };

    useEffect( () => {
        getTrending();
    } )

    return( 
        <div >

            <main className={ styles.main }>

                <div id="list" className={ styles.trendlist }>

                    { movies.filter( movie => movie.poster_path ).map( movie => (
                        <div className={ styles.moviecard }>
                            
                            <img
                                key={ movie.id }
                                src={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${ movie.poster_path }` }
                                alt={ movie.title + " Poster" }
                                className={ styles.poster }
                            />

                            <div className={ styles.moviedata }>
                                <h3>{ movie.title }</h3>
                            </div>


                        </div>
                    ) ) }

                </div>
                
            </main>

        </div>
    ); // End return

}