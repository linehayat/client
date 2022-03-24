import type { NextPage } from 'next';
import Head from 'next/head';

import AboutUsComponent from '../components/aboutus/AboutUsComponent';
import ContactComponent from '../components/contact/ContactComponent';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <AboutUsComponent/>
      <ContactComponent/>
    </main>
  </div>
);


export default Home;