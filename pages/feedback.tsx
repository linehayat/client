import type { NextPage } from 'next';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';

import FeedbackForm from '../components/FeedbackForm';

const Feedback: NextPage = () => (
  <>
    <Head>
      <title>Feedback - LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ChakraProvider>
      <FeedbackForm />
    </ChakraProvider>
  </>
);

export default Feedback;
