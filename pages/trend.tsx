// Functions
import { Header } from 'components/Header';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';
import { Trending } from 'components/Trending';

// Styles
import styles from 'styles/Home.module.css';


export default function Main () {

    return (
        <div className={ styles.container }>

            <Header />
            <Nav />

            <Trending />

            <Footer />

        </div>
    ); // End return
  
}
