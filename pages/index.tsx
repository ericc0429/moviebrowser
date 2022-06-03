import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Home.module.css';

import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export default function Home() {

  return (
    <div className={ styles.container }>

      <Header />

      <Nav />

      <main className={ styles.main }>
        
        <h1 className={ styles.title }>
          Welcome to Movies Database!
        </h1>
        
      </main>

      <Footer />
    </div>
  ); // End return
  
}
