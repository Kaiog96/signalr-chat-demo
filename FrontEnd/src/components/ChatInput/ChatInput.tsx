import "./ChatInput.css";

interface Props {
  usuario: string;
  mensagem: string;
  onUsuarioChange: (value: string) => void;
  onMensagemChange: (value: string) => void;
  onEnviar: () => void;
}

export function ChatInput({
  usuario,
  mensagem,
  onUsuarioChange,
  onMensagemChange,
  onEnviar,
}: Props) {
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => onUsuarioChange(e.target.value)}
      />
      <input
        className="chat-input"
        placeholder="Mensagem"
        value={mensagem}
        onChange={(e) => onMensagemChange(e.target.value)}
      />
      <button className="chat-button" onClick={onEnviar}>
        Enviar
      </button>
    </div>
  );
}
