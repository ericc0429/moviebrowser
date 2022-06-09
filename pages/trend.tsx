import styles from '/styles/Home.module.css';

import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

import { Trending } from '../components/Trending';

export default function Home() {

    return (
        <div className={ styles.container }>

            <Header />

            <Nav />

            <main>
          
                <Trending />

            </main>

            <Footer />
        </div>
    ); // End return
  
}
