import type { NextPage } from 'next';
import Head from 'next/head';

import FeedbackForm from '../components/FeedbackForm';

const Feedback: NextPage = () => (
  <div>
    <Head>
      <title>Feedback - LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <FeedbackForm />
    </main>
  </div>
);

export default Feedback;