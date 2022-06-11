// Libraries
import React, { useState, useEffect } from 'react';

// API data
const api_key="6c0d3427fcf17ddf80d04106c35a3a98";
const api_url = `https://api.themoviedb.org/3/movie/`;

export default function Movie ( props ) {

    //const [ movies, setMovies ] = useState( [] );
    // const [ movie, setMovie ] = useState( [] );

    const append = `${ props.id }?api_key=${ api_key }`;
    const url = api_url.concat( append );

    const getData = async () => {
        // const getTrending = async ( e ) => {
    
            // e.preventDefault();
    
            // console.log( "submitting..." );
    
            console.log( `-- Loading Movie [ ${ props.id } ] Data --` ) // Debugging purposes
    
            try { // Parse data and store into movies array
                const res = await fetch( url );
                const data = await res.json();
                console.log( data );
                // setMovie( data.results );
            }
            catch( err ) {
                console.log( err );
            }
    
    };

    useEffect( () => { // Runs function getTrending on page load. (Runs every time page is loaded)
        getData();
    }, [] ) // The null array here is required to prevent useEffect from spamming API database.


    return (
        <div>
            <main>

                <p>Movie [ { props.id /* Find a way to make this reference id through movie.id */ } ]</p> 
                <p>Title: { }</p>

            </main>
        </div>
    ); // End Return
}