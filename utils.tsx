interface ChatEventCallbacks {
  onNewMessage: (newMessage: string) => void;
  onChatEnd: () => void;
}

let connection: WebSocket | null = null;

function openConnection() {
  if (connection === null) {
    connection = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_HOST as string);
    connection.onclose = () => connection = null;
  }
}

function closeConnection(reason: string) {
  if (connection === null) {
    return;
  }
  connection.close(1000, reason);
  connection = null;
}

function requestChat() {
  openConnection();
  (connection as WebSocket).onopen = () => {
    (connection as WebSocket).send(JSON.stringify({ type: 4 }));
  }
  (connection as WebSocket).addEventListener('message', saveId);

  function saveId({ data }: MessageEvent) {
    data = JSON.parse(data);
    if (data.type === 8) {
      localStorage.setItem('id', data.userId);
      (connection as WebSocket).removeEventListener('message', saveId);
    }
  }
}

function awaitResponse(onResponse: () => void) {
  if (connection === null) {
    throw 'connection is null';
  }
  connection.onmessage = ({ data }) => {
    data = JSON.parse(data);
    if (data.type === 1) {
      onResponse();
      (connection as WebSocket).onmessage = null;
    }
  }
}

function handleChatEvents({ onNewMessage, onChatEnd }: ChatEventCallbacks) {
  if (connection === null) {
    throw 'connection is null';
  }
  connection.onmessage = ({ data }) => {
    data = JSON.parse(data);
    switch (data.type) {
      case 2:
        onNewMessage(data.message);
        break;
      case 6:
        onChatEnd();
        break;
    }
  }
}

function sendMessage(message: string) {
  if (connection === null) {
    throw 'connection is null';
  }
  connection.send(JSON.stringify({
    metadata: {
      identity: localStorage.getItem('id'),
      type: 'student'
    },
    type: 6,
    payload: {
      message
    }
  }));
}

function endChat() {
  if (connection === null) {
    throw 'connection is null';
  }
  connection.send(JSON.stringify({
    metadata: {
      identity: localStorage.getItem('id'),
      type: 'student',
    },
    type: 7,
  }));
}

export { closeConnection, requestChat, awaitResponse, handleChatEvents, sendMessage, endChat };