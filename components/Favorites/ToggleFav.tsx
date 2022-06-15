import React, { useState } from 'react';

const favLSKey = "favorites";

/*
export default function FavStatus( props ) {
    
    const [ isFav, toggleFav ] = useToggleMovieFav( props.id );

}
*/

export default function useToggleMovieFav ( id: number ) {

    const [ isFav, setIsFav ] = useState( () => {
        // Return true if the id is found in localStorage favorites array
        // Return false if localStorage favorites array doesn't exist, or if id is not found in it
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

    return [ isFav, toggleFav ];
}

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