import type { NextPage } from 'next';
import Head from 'next/head';

import AboutUsComponent from '../components/aboutus/AboutUsComponent';
import ContactComponent from '../components/contact/ContactComponent';
import HomeCarouselComponent from '../components/homeCarousel/HomeCarouselComponent';

const Home: NextPage = () => (
  <>
    <Head>
      <title>LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="p-4">
      <HomeCarouselComponent />
      <AboutUsComponent />
      <ContactComponent />
    </div>
  </>
);

export default Home;