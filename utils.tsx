interface ChatEventCallbacks {
  onNewMessage: (newMessage: string) => void;
}

let connection: WebSocket | null = null;

function openConnection() {
  if (connection === null) {
    connection = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_HOST as string);
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

function handleChatEvents({ onNewMessage }: ChatEventCallbacks) {
  if (connection === null) {
    throw 'connection is null';
  }
  connection.onmessage = ({ data }) => {
    data = JSON.parse(data);
    switch (data.type) {
      case 2:
        onNewMessage(data.message);
        break;
    }
  }
}

export { closeConnection, requestChat, awaitResponse, handleChatEvents };