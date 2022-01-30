import type { NextPage } from 'next';
import Head from 'next/head';
import PrivacyPolicy from "../components/views/privacyPolicy/PrivacyView.js";

const Privacy: NextPage = () => (
  <>
    <Head>
      <title>Privacy - LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PrivacyPolicy />
  </>
);

export default Privacy;
