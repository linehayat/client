import type { NextPage } from 'next';
import Head from 'next/head';

import ChatScreen from '../components/chat/ChatScreen';

const Chat: NextPage = () => (
  <div>
    <Head>
      <title>Chat - LineHayat</title>
      <meta name="description" content="LineHayat description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ChatScreen />
    </main>
  </div>
);

export default Chat;