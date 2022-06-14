// Libraries
import React, { useState } from 'react';

// Styles
import styles from './Favorites.module.css';

// Array for star. Use index 0 for not favorited, index 1 for favorited
const stars = [ "☆", "★" ]


export default function Favorites ( props: any ) {

    const [ isFav, setIsFav ] = useState( false );

    const toggleFav = async (e) => {

        e.preventDefault();

        console.log( `--- Setting isFav for ${ props.id } to ${ !isFav } ---` );
        setIsFav( !isFav );

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


function getFavLogo ( isFav: Boolean ) {
    return stars[ Number( isFav ) ];
}