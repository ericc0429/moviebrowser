// Libraries
import React, { useState } from 'react';

// Styles
import styles from './Favorites.module.css';

// Array for star. Use index 0 for not favorited, index 1 for favorited
const stars = [ "☆", "★" ];


export default function Favorites ( props: any ) {

    const [ isFav, setIsFav ] = useState( isInLS( props.id ) );

    const toggleFav = async (e) => {

        e.preventDefault();

        // console.log( `--- Setting isFav for ${ props.id } to ${ !isFav } ---` );
        
        setFav( props.id, setIsFav );

    }

    return (
        <form
            onSubmit={ toggleFav }
        >
            <button 
                type="submit"
                className={ isFav ? styles.favbuttonon : styles.favbuttonoff }
            >
                { getFavLogo( isFav ) }
            </button>
        </form>
    );
}


function setFav( id: number, setter: Function ) {
    // Check if the favorites list already exists in localStorage:
    if ( localStorage.getItem( "favorites" ) ) { // Favorites list was in localStorage; update for current movie

        var favList = JSON.parse( localStorage[ "favorites" ] ); // Get favorites
        
        // Check if favorites list contains the current movie's id
        if ( favList.indexOf( id ) == -1 ) { // Doesn't contain it: Add current movie id (Favorite)
            // Add movie id to favorites list
            favList.push( id );
            setter( true );

            console.log( `--- Added movie [ ${ id } ] to favList ---` ); // Debug
            console.log( favList );
        }
        else { // Contains it: Remove current movie id (Unfavorite)
            // Remove movie id from favorites list
            var index = favList.indexOf( id );
            favList.splice( index, 1 );
            setter( false );

            console.log( `--- Removed movie [ ${ id } ] from favList ---` ); // Debug
            console.log( favList );
        }

        localStorage.setItem( "favorites", JSON.stringify( favList ) ); // Update favorites

    }
    else { // Favorites list wasn't in localStorage; Add new array.

        // Create new array and append movie id, update page accordingly
        var newFav = [];
        newFav.push( id );
        setter( true );

        // Update favorites list in localStorage
        localStorage.setItem( "favorites", JSON.stringify( newFav ) );
        console.log( `--- Created new favList ---` ); // Debug

    }
}

// Helper function for useState to check if the movie was already favorited in localStorage.
function isInLS( id: number ) {
    if ( localStorage.getItem( "favorites" ) ) {
        var favList = JSON.parse( localStorage[ "favorites" ] );
        if ( favList.indexOf( id ) != -1 ) {
            return true;
        }
        else return false;
    }
    else return false;
}

function getFavLogo ( isFav: Boolean ) {
    return stars[ Number( isFav ) ];
}