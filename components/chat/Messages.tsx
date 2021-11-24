interface Props {
  messages: string[];
}

function Messages({ messages }: Props) {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
}

export default Messages;