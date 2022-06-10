// Libraries
import { useRouter } from 'next/router';

// Functions
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';

// Styles
import styles from '/styles/Home.module.css';


export default function Home() {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div className={ styles.container }>

            <Header />
            <Nav />

            <main className={ styles.main }>

                <h1>
                    <a>
                        Movie [ { id } ]
                    </a>
                </h1>

            </main>

            <Footer />

        </div>
    ); // End return

}
