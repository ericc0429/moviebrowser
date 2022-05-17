import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Home.module.css';
import resultscss from '/styles/Results.module.css';

import Header from '/components/Header.js';
import Nav from '/components/Nav.js';
import Footer from '/components/Footer.js';

import Search from '/components/Search.js'

export default function Home() {

  return (
    <div className={ styles.container }>

      <Header />

      <Nav />

      <main>
        <center>
          
          <h1>
            [ Gallery view ]
          </h1>
          <p><small>Implementation under progress.</small></p>

        </center>
      </main>

      <Footer />
    </div>
  ); // End return
  
}
