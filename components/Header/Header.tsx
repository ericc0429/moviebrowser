import Head from 'next/head';
import Image from 'next/image';

import styles from './Header.module.css';

export default function Header () {

    return (

        <div>

            <Head>
                <title>erc - Home</title>
                <meta name="description" content="Search for your favorite movies" />
                <meta name="author" content="Eric Chen" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={ styles.header }>
                Movie Browser
            </div>

        </div>
        
    ); // End return

}