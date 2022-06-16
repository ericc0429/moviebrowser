// Libraries
import React, { useState, useEffect } from 'react';

// Functions
import { Favorites } from 'components/Favorites';

// Styles
import styles from 'components/Movie/Movie.module.css';

// API data
const api_key="6c0d3427fcf17ddf80d04106c35a3a98";
const api_url = `https://api.themoviedb.org/3/movie/`;

export default function Movie ( props ) {

    const [ movies, setMovies ] = useState( [] );
    //const [ movie, setMovie ] = useState( {} );

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
                setMovies( [data] );
            }
            catch( err ) {
                console.log( err );
            }
    };

    useEffect( () => { // Runs function getTrending on page load. (Runs every time page is loaded)
        getData();
    }, [] ) // The null array here is required to prevent useEffect from spamming API database.

    console.log( movies );

    return (
        <div>
            <main>

                { movies.filter( movie => movie.id == props.id ).map( movie => (

                    <div className={ styles.container } key={ movie.id }>

                        <div className={ styles.subflexcol }>

                            <img
                                key={ movie.id }
                                src={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${ movie.poster_path }` }
                                alt={ movie.title + " Poster" }
                                className={ styles.poster }
                            />

                            <a className={ styles.linkbutton } href={ movie.homepage }>Watch Now</a>

                            <Favorites 
                                id={ movie.id }
                                useLogo={ false }
                            />

                        </div>

                        <div className={ styles.moviecontainer }>

                            <div className={ styles.flexrow }>
                                <p className={ styles.movietitle }>{ movie.title }</p>
                                <p className={ styles.movieid }>{ movie.id }</p>
                            </div>

                            <p className={ styles.movierating }>Rating: { movie.vote_average }/10 ({ movie.vote_count } reviews)</p>
                            
                            <p className={ styles.moviedesc }>{ movie.overview }</p>
                            
                            <div className={ styles.subflexrow }>

                                <div className={ styles.subflexcol }>

                                    <p className={ styles.moviedata }>Release Date: { parseReleaseDate( movie.release_date ) }</p>

                                    <div className={ styles.flexrow }>
                                        { movie.genres.map( genre => (
                                            <p className={ styles.moviegenre } key={ genre.id }>{ genre.name }</p>
                                        ) ) }
                                    </div>

                                </div>

                                <div className={ styles.prodcontainer }>
                                    <p className={ styles.movieprod }>Production: </p>
                                    { movie.production_companies.map( prod => (
                                            <p className={ styles.moviedata } key={ prod.id }>{ prod.name }</p>
                                    ) ) }
                                </div>

                            </div>

                        </div>

                    </div>

                ) ) }

            </main>
        </div>
    ); // End Return
}

const months = [
    undefined,
    "January ",
    "February ",
    "March ",
    "April ",
    "May ",
    "June ",
    "July ",
    "August ",
    "September ",
    "October ",
    "November ",
    "December "
]

function parseReleaseDate( rawDate: string ) {

    let dateArr = rawDate.split( "-" );
    let month = months[ parseInt( dateArr[1] ) ];
    let date = ( month + parseInt( dateArr[2] ).toString() + ", " + dateArr[0] );
    return date;
    
}