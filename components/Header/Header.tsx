// Libraries
import Head from 'next/head';

// Functions
import { Nav } from 'components/Nav';

// Styles
import styles from './Header.module.css';


export default function Header ( { pageName }: any ) {

    return (

        <div>

            <Head>
                <title>MB - { pageName }</title>
                <meta name="description" content="Search for your favorite movies" />
                <meta name="author" content="Eric Chen" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={ styles.header }>
                Movie Browser
            </div>

            <Nav />

        </div>
        
    ); // End return

}