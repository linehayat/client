import type { NextPage } from 'next';
import Head from 'next/head';
import FAQView from '../components/faq/FaqComponent';

const FAQ: NextPage = () => (
  <>
    <Head>
      <title>FAQ - LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <FAQView />
  </>
);

export default FAQ;