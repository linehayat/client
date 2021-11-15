import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
        LineHayat homepage
      </h1>
      <Link href="/chat">Chat</Link>
    </main>
  </div>
);

export default Home;