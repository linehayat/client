import { useState, useEffect } from 'react';
import { handleChatEvents, sendMessage } from '../../utils';
import Messages from './Messages';

function Chat() {
  const [messageInputText, setMessageInputText] = useState('');
  const [messages, setMessages] = useState([] as string[]);

  useEffect(() => {
    handleChatEvents({
      onNewMessage: (newMessage) => setMessages((messages) => [...messages, newMessage]),
    });
  }, []);

  return (
    <div>
      <p>
        Listening Volunteer
      </p>
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
  );
}

export default Chat;