// Libraries
import React from 'react';

// Functions
import useToggleFav from './useToggleFav';

// Styles
import styles from './Favorites.module.css';

// Array for star. Use index 0 for not favorited, index 1 for favorited
const stars = [ "☆", "★" ];
const favText = [ "Favorite", "Favorited" ]

// What we want the key's name to be (Put here to make it more straightforward to change)
const favLSKey = "favorites";


interface FavItems {
    id: number;
    useLogo: boolean
}

export default function Favorites ( { id, useLogo }: FavItems ) {

    const [ isFav, toggleFav ] = useToggleFav( favLSKey, id );

    const setFav = async (e) => {

        //e.preventDefault();

        const test = toggleFav();
        console.log( `-- Movie [ ${id} ] ${test ? "favorited" : "unfavorited" } --` );

    }

    return (
        <button onClick={ setFav }
        className={ useLogo ? ( isFav ? styles.favButtonOn : styles.favButtonOff ) : ( isFav ? styles.favTextOn : styles.favTextOff ) }>
            { useLogo ? stars[ Number( isFav ) ] : favText[ Number( isFav ) ] }
        </button>
    );

    /* OLD BUTTON
    return (
        <form
            onSubmit={ setFav }
        >
            <button 
                type="submit"
                className={ isFav ? styles.favButtonOn : styles.favButtonOff }
            >
                { stars[ Number( isFav ) ] }
            </button>
        </form>
    );
    */
    
}

