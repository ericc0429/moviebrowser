// Libraries
import { useRouter } from 'next/router';

// Functions
import { Header } from 'components/Header';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';
import { Movie } from 'components/Movie';

// Styles
import styles from 'styles/Home.module.css';


export default function Main () {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div className={ styles.container }>

            <Header />
            <Nav />

            <Movie
                id={ id }
            />

            <Footer />

        </div>
    ); // End return

}
