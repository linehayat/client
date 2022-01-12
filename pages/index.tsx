import type { NextPage } from 'next';
import Head from 'next/head';
import HomeView from '../components/views/home/HomeView';

const Home: NextPage = () => (
  <>
    <Head>
      <title>LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomeView />
  </>
);

export default Home;