import { useState } from 'react';
import Messages from './Messages';

function Chat() {
  const [messages, setMessages] = useState([] as string[]);

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