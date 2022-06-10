// Styles
import styles from './Footer.module.css';


export default function Footer () {

    return (
        <footer className={ styles.footer }>
            
            <div>
                <a>
                    A website for browsing movies.
                </a>

                <a href="https://github.com/ericc0429">Created by Eric Chen (ericc0429).</a>
            </div>
            
        </footer>
    ); // End return

}
