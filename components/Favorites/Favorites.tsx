// Libraries
import React, { useState } from 'react';

// Functions
import useToggleMovieFav from './ToggleFav';

// Styles
import styles from './Favorites.module.css';

// Array for star. Use index 0 for not favorited, index 1 for favorited
const stars = [ "☆", "★" ];


interface FavItems {
    id: number;
}

export default function Favorites ( { id }: FavItems ) {

    const [ isFav, toggleFav ] = useToggleMovieFav( id );

    //console.log( isFav );

    const setFav = async (e) => {

        //e.preventDefault();

        // console.log( `--- Setting isFav for ${ props.id } to ${ !isFav } ---` );
        toggleFav();
        
        // setFav( props.id, setIsFav );

    }

    return (
        <form
            onSubmit={ setFav }
        >
            <button 
                type="submit"
                className={ isFav ? styles.favButtonOn : styles.favButtonOff }
            >
                { getFavLogo( isFav ) }
            </button>
        </form>
    );
    
}


function getFavLogo ( isFav: boolean ) {
    return stars[ Number( isFav ) ];
}