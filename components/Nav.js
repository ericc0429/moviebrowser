import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Home.module.css';

export default function Header () {

    return (
        <div className={ styles.navbar }>
            
            <Link href="/">
                <a className={ styles.navcard }>Home</a>
            </Link>

            <Link href="/gallery">
                <a className={ styles.navcard }>Gallery</a>
            </Link>

            <Link href="/s">
                <a className={ styles.navcard }>Search</a>
            </Link>

        </div>
        
        
    ); // End return

}