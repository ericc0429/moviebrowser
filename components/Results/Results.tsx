// Libraries
import Link from 'next/link';

// Functions
import { Favorites } from 'components/Favorites'

// Styles
// import styles from 'components/Results/Results.module.css';
import trendcss from 'components/Trending/Trending.module.css';
import searchcss from 'components/Search/Search.module.css';

export default function Results ( props: any ) {

    let customStyles = searchcss;

    if ( props.isTrend ) {
        customStyles = trendcss;
    }

    return (

        <div className={ customStyles.movielist }>

            { props.movies.filter( movie => movie.poster_path ).map( movie => (

                <div className={ customStyles.moviecard } key={ movie.id }>

                    <Link href={ "/movie/".concat( movie.id ) }>

                        <div>

                            <img
                                key={ movie.id }
                                src={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${ movie.poster_path }` }
                                alt={ movie.title + " Poster" }
                                className={ customStyles.poster }
                            />

                            { getMovieData( movie, props.isTrend, customStyles ) }


                        </div>

                    </Link>

                    <Favorites
                        id={ movie.id }
                    />

                </div>

            ) ) }

        </div>
                
    );
}

function getMovieData( movie, isTrend, _styles ) {
    if ( isTrend ) {
        return (
            <div className={ _styles.moviedata }>
                <p className={ _styles.title }>{ movie.title }</p>
            </div>
        ); // End Return
    }
    else {
        return (

            <div className={ _styles.moviedata }>
                <p className={ _styles.title }>{ movie.title }</p>
                <p className={ _styles.details }>Release Date: { movie.release_date }</p>
                <p className={ _styles.details }>Rating: { movie.vote_average }</p>
                <p className={ _styles.desc }>{ movie.overview }</p>
            </div>

        ); // End Return
    }
}