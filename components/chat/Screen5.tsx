import { useState, useEffect } from 'react';
import { handleChatEvents } from '../../utils';
import Messages from './Messages';

function Chat() {
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
      <textarea placeholder="Type your message here..."></textarea>
      <button>Send</button>
    </div>
  );
}

export default Chat;