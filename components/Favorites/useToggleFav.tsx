import React, { useState, useEffect } from 'react';

export default function useToggleFav ( key: string, id: number ) {

    const [ defaultFav, setIsFav ] = useState( false );

    let isFav = defaultFav;

    if ( typeof window === undefined ) isFav = defaultFav;

    // JSON string with key's value
    const fav = window.localStorage.getItem( key );
    
    if ( fav != null && JSON.parse( fav ).indexOf( id ) !== -1 ) isFav = true;
    else if ( fav != null ) isFav = false;
    else {
        window.localStorage.setItem( key, JSON.stringify( [] ) );
        isFav = false;
    }

    // setter function to be returned
    const toggleFav = () => {
        setIsFav( !isFav );
        updateLS( key, id );
        return !isFav; // Return updated isFav for debug purposes.
    }

    return [ isFav, toggleFav ] as const;
}

// Helper function to update localStorage for given key.
function updateLS( key: string, id: number ) {

    //if ( typeof window !== "undefined" ) {
            
        // fav - JSON string containing the value at key
        const fav = localStorage.getItem( key );

        if ( fav !== null ) { // If the array is initialized (which it should be)
        
            // favArr - parsed array for appending/removing favorited movies
            const favArr = JSON.parse( fav );

            // Add movie-to-be-favorited ID to favArr
            if ( favArr.indexOf( id ) == -1 ) favArr.push( id );
            // Remove movie-to-be-favorited ID from favArr
            else favArr.splice( favArr.indexOf( id ), 1 );

            // Update key's value in localStorage and return updated favArr
            localStorage.setItem( key, JSON.stringify( favArr ) );
            return favArr;
            //window.localStorage.setItem( key, JSON.stringify( id ) );
        }
        else { // This should never be called but just in case
            window.localStorage.setItem( key, JSON.stringify( [ id ] ) );
            return [ id ];
        }
    //}
}

/*
    const [ isFav, setIsFav ] = useState( () => {
        // Return true if the id is found in localStorage favorites array
        // Return false if localStorage favorites array doesn't exist, or if id is not found in it
        //const fav = JSON.parse( localStorage[ favLSKey ] );
        console.log( JSON.parse( localStorage[ favLSKey ] ) )
        return ( localStorage.getItem( favLSKey ) &&
            JSON.parse( localStorage[ favLSKey ] ).indexOf( id ) != -1 );
    } );

    const toggleFav = () => {
        setIsFav( !isFav );
        
        if ( localStorage.getItem( favLSKey ) ) {
            
            const favArr = JSON.parse( localStorage[ favLSKey ] ); // Parse favorites from JSON to string

            // Check if movie is listed in favArr
            if ( favArr.indexOf( id ) > -1 ) {
                favArr.splice( favArr.indexOf( id ), 1 );
                console.log( `--- Removed movie [ ${ id } ] from favList ---` ); // Debug
            }
            else {
                favArr.push( id );
                console.log( `--- Added movie [ ${ id } ] to favList ---` ); // Debug
            }

            // Update localStorage with modified favArr
            localStorage.setItem( favLSKey, JSON.stringify( favArr ) );
        }
        else {
            const newArr = [  ];
            newArr.push( id );

            localStorage.setItem( favLSKey, JSON.stringify( newArr ) );
            console.log( `--- Created new favList ---` ); // Debug
        }
    }
    */

/*
function toggleFavLS ( id: number ) {

    if ( localStorage.getItem( "favorites" ) ) { // Favorites list was in localStorage; update for current movie

        const favList = JSON.parse( localStorage[ "favorites" ] ); // Get favorites
        
        // Check if favorites list contains the current movie's id
        if ( favList.indexOf( id ) == -1 ) { // Doesn't contain it: Add current movie id (Favorite)
            // Add movie id to favorites list
            favList.push( id );

            console.log( `--- Added movie [ ${ id } ] to favList ---` ); // Debug
            console.log( favList );
        }
        else { // Contains it: Remove current movie id (Unfavorite)
            // Remove movie id from favorites list
            var index = favList.indexOf( id );
            favList.splice( index, 1 );

            console.log( `--- Removed movie [ ${ id } ] from favList ---` ); // Debug
            console.log( favList );
        }

        localStorage.setItem( "favorites", JSON.stringify( favList ) ); // Update favorites

    }
    else { // Favorites list wasn't in localStorage; Add new array.

        // Create new array and append movie id, update page accordingly
        var newFav = [];
        newFav.push( id );

        // Update favorites list in localStorage
        localStorage.setItem( "favorites", JSON.stringify( newFav ) );
        console.log( `--- Created new favList ---` ); // Debug

    }

}
*/