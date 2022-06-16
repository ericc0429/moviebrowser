// Functions
import { Header } from 'components/Header';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';

// Styles
import styles from 'styles/Home.module.css';

export default function Main () {

    return (
        <div className={ styles.container }>

            <Header
                pageName={ "Home" }
            />
            <Nav />

            <main className={ styles.main }>
        
                <h1 className={ styles.title }>
                    Welcome to Movies Database!
                </h1>

                <a
                    className={ styles.link }
                    href="https://github.com/ericc0429/moviebrowser"
                >GitHub Repo Link</a>

                <p className={ styles.text }>
                    This website was created using NextJS, 
                    and aims to utilize The Movie Database&apos;s 
                    API to introduce the user to various 
                    movies that are currently trending, and 
                    allows for the user to search for a 
                    specific movie by name.
                </p>
        
            </main>

            <Footer />
            
        </div>
    ); // End return
}
