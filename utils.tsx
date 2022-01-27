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
}

function awaitResponse(onResponse: () => void) {
  if (connection === null) {
    throw 'connection is null';
  }
  (connection as WebSocket).addEventListener('message', handleResponse);

  function handleResponse({ data }: MessageEvent) {
    data = JSON.parse(data);
    switch (data.type) {
      case 1:
        onResponse();
        (connection as WebSocket).removeEventListener('message', handleResponse);
        break;
      case 8:
        localStorage.setItem('id', data.userId);
        break;
    }
  }
}

function reconnect() {
  openConnection();
  (connection as WebSocket).onopen = () => {
    (connection as WebSocket).send(JSON.stringify({
      metadata: {
        identity: localStorage.getItem('id'),
        type: 'student',
      },
      type: 5,
    }));
  }
}

function handleChatEvents({ onNewMessage, onChatEnd }: ChatEventCallbacks) {
  if (connection === null) {
    throw 'connection is null';
  }
  (connection as WebSocket).addEventListener('message', handleChatEvent);

  function handleChatEvent({ data }: MessageEvent) {
    data = JSON.parse(data);
    switch (data.type) {
      case 2:
        onNewMessage(data.message);
        break;
      case 6:
        onChatEnd();
        (connection as WebSocket).removeEventListener('message', handleChatEvent);
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

export { closeConnection, requestChat, awaitResponse, reconnect, handleChatEvents, sendMessage, endChat };