// Libraries
import React, { useState } from 'react';

// Functions
import { Results } from 'components/Results';
import { Trending } from 'components/Trending';

// Styles
import sbstyles from './Searchbar.module.css';
import styles from './Search.module.css';


// API data
const api_key="6c0d3427fcf17ddf80d04106c35a3a98";
const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${ api_key }`;

export default function Search() {

    const [ query, setQuery ] = useState( "" );

    const [ movies, setMovies ] = useState( [] );

    const append = `&query=${ query }`; // Add anything to be appended into URL here
    const url = api_url.concat( append ); // Concatenate the URL with whatever to be appended

    // Search function
    const searchMovies = async ( e ) => {

        e.preventDefault(); // Prevents search from resetting near instantly

        console.log( "-- Submitting Search Query --" ); // Debugging purposes
        
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
            <main className={ sbstyles.main }>

                <form
                    className={ sbstyles.search }
                    onSubmit={ searchMovies }
                >

                    <input
                        type="text"
                        className={ sbstyles.input }
                        placeholder="movie"
                        value={ query }
                        onChange={ ( e ) => setQuery( e.target.value ) }
                    />

                    <button
                        type="submit"
                        className={ sbstyles.button }
                    >
                        Search
                    </button>

                </form>

                <Results 
                    movies={ movies }
                    isTrend={ false }
                />

                <Trending />

            </main>
        </div>
    );
}