// Functions
import { Header } from 'components/Header';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';
import { Search } from 'components/Search'

// Styles
import styles from 'styles/Home.module.css';


export default function Main () {

    return (
        <div className={ styles.container }>

            <Header
                pageName={ "Search" }
            />

            <Search />

            <Footer />

        </div>
    ); // End return
  
}
