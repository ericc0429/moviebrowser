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
        
}