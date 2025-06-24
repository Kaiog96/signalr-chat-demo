import "./ChatMessages.css";

interface Props {
  mensagens: string[];
}

export function ChatMessages({ mensagens }: Props) {
  return (
    <div className="chat-messages-container">
      {mensagens.map((msg, index) => (
        <div key={index} className="chat-message-item">
          {msg}
        </div>
      ))}
    </div>
  );
}
