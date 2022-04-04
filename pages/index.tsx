import type { NextPage } from 'next';
import Head from 'next/head';

import AboutUsComponent from '../components/aboutus/AboutUsComponent';
import ContactComponent from '../components/contact/ContactComponent';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.home}>
      <AboutUsComponent/>
      <ContactComponent/>
    </main>
  </div>
);


export default Home;