// Styles
import trendcss from '../Trending/Trending.module.css';
import searchcss from '../Search/Search.module.css';

export default function Results ( props: any ) {

    let styles = searchcss;

    if ( props.isTrend ) {
        styles = trendcss;
    }

    return (

        <div id="list" className={ styles.movielist }>

            { props.movies.filter( movie => movie.poster_path ).map( movie => (
                <div className={ styles.moviecard } key={ movie.id }>
                    
                    <img
                        key={ movie.id }
                        src={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${ movie.poster_path }` }
                        alt={ movie.title + " Poster" }
                        className={ styles.poster }
                    />

                    { getMovieData( movie, props.isTrend, styles ) }


                </div>
            ) ) }

        </div>
                
    );
}

function getMovieData( movie, isTrend, styles ) {
    if ( isTrend ) {
        return (
            <div className={ styles.moviedata }>
                <h3>{ movie.title }</h3>
            </div>
        ); // End Return
    }
    else {
        return (

            <div className={ styles.moviedata }>
                <p className={ styles.title }>{ movie.title }</p>
                <p className={ styles.details }>Release Date: { movie.release_date }</p>
                <p className={ styles.details }>Rating: { movie.vote_average }</p>
                <p className={ styles.desc }>{ movie.overview }</p>
            </div>

        ); // End Return
    }
}