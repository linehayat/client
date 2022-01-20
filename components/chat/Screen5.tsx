import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import useLocalStorage from '../../hooks/useLocalStorage';
import { handleChatEvents, sendMessage, endChat } from '../../utils';
import Modal from '../Modal';
import Messages from './Messages';

function Chat() {
  const [messageInputText, setMessageInputText] = useState('');
  const [messages, setMessages] = useLocalStorage('messages', [] as string[]);
  const [isChatEndModalOpen, setIsChatEndModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    handleChatEvents({
      onNewMessage: (newMessage) => setMessages((messages) => [...messages, newMessage]),
      onChatEnd: () => {
        localStorage.clear();
        setIsChatEndModalOpen(true);
      },
    });
  }, []);

  return (
    <>
      <div>
        <p>
          Listening Volunteer
        </p>
        <button onClick={() => {
          endChat();
          localStorage.clear();
          router.push('/feedback');
        }}>End chat</button>
        <Messages messages={messages} />
        <textarea value={messageInputText} onChange={(event) => setMessageInputText(event.target.value)} placeholder="Type your message here..."></textarea>
        <button onClick={() => {
          if (messageInputText) {
            sendMessage(messageInputText);
            setMessages((messages) => [...messages, messageInputText]);
            setMessageInputText('');
          }
        }}>Send</button>
      </div>
      {isChatEndModalOpen && <Modal>
        <p>Volunteer ended the chat</p>
        <Link href="/feedback">Leave feedback</Link>
      </Modal>}
    </>
  );
}

export default Chat;