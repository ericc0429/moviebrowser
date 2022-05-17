import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '/styles/Home.module.css';

import Header from '/components/Header.js';
import Nav from '/components/Nav.js';
import Footer from '/components/Footer.js';

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
