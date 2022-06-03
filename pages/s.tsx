import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Home.module.css';
import resultscss from '/styles/Results.module.css';

import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Search } from '../components/Search'

export default function Home() {

  return (
    <div className={ styles.container }>

      <Header />

      <Nav />

      <main>

        <Search />

      </main>

      <Footer />
    </div>
  ); // End return
  
}
