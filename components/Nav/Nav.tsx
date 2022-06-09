import Link from 'next/link';

import styles from './Nav.module.css';

export default function Nav() {

    return (
        <div className={ styles.navbar }>
            
            <Link href="/">
                <a className={ styles.navcard }>Home</a>
            </Link>

            <Link href="/trend">
                <a className={ styles.navcard }>Now Trending</a>
            </Link>

            <Link href="/s">
                <a className={ styles.navcard }>Search</a>
            </Link>

        </div>
        
        
    ); // End return

}