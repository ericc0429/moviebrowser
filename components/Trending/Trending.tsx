// Libraries
import React, { useState, useEffect } from 'react';

// Functions
import { Results } from 'components/Results'

// Styles
import styles from './Trending.module.css';


// API data
const api_key="6c0d3427fcf17ddf80d04106c35a3a98";
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${ api_key }`;

export default function Trending() {

    const [ movies, setMovies ] = useState( [] );

    const getTrending = async () => {
    // const getTrending = async ( e ) => {

        // e.preventDefault();

        // console.log( "submitting..." );

        console.log( "-- Loading Trending Movies --" ) // Debugging purposes

        try { // Parse data and store into movies array
            const res = await fetch( url );
            const data = await res.json();
            console.log( data.results );
            setMovies( data.results );
        }
        catch( err ) {
            console.log( err );
        }

    };

    useEffect( () => { // Runs function getTrending on page load. (Runs every time page is loaded)
        getTrending();
    }, [] ) // The null array here is required to prevent useEffect from spamming API database.

    return (
        <div>
            <main className={ styles.main }>

                <div className={ styles.trending }>Now Trending</div>

                <Results
                    movies={ movies }
                    isTrend={ true }
                />

            </main>
        </div>
    ); // End Return

}