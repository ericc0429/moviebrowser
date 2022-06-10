// Functions
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

// Styles
import styles from '/styles/Home.module.css';

export default function Home() {

    return (
        <div className={ styles.container }>

            <Header />
            <Nav />

            <main className={ styles.main }>
        
                <h1 className={ styles.title }>
                    Welcome to Movies Database!
                </h1>
        
            </main>

            <Footer />
            
        </div>
    ); // End return
}
