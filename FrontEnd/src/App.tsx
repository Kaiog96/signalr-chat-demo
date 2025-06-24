import { useEffect, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { ChatInput } from "./components/ChatInput/ChatInput";
import { ChatMessages } from "./components/ChatMessages/ChatMessages";
import "./App.css";

function App() {
  const connectionRef = useRef<signalR.HubConnection | null>(null);
  const [mensagens, setMensagens] = useState<string[]>([]);
  const [usuario, setUsuario] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const novaConexao = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5256/chatHub")
      .withAutomaticReconnect()
      .build();

    novaConexao
      .start()
      .then(() => {
        connectionRef.current = novaConexao;

        novaConexao.on("ReceberMensagem", (usuario, mensagem) => {
          setMensagens((prev) => [...prev, `${usuario}: ${mensagem}`]);
        });
      })
      .catch((err) => console.error("Erro na conexão SignalR:", err));

    return () => {
      novaConexao.stop();
    };
  }, []);

  const enviar = async () => {
    if (connectionRef.current && usuario && mensagem) {
      await connectionRef.current.invoke("EnviarMensagem", usuario, mensagem);
      setMensagem("");
    }
  };

  return (
    <div className="app-container">
      <h2 className="app-title">💬 Chat com SignalR</h2>
      <p className="app-subtitle">
        Converse com outros usuários em tempo real.
      </p>
      <ChatInput
        usuario={usuario}
        mensagem={mensagem}
        onUsuarioChange={setUsuario}
        onMensagemChange={setMensagem}
        onEnviar={enviar}
      />
      <ChatMessages mensagens={mensagens} />
    </div>
  );
}

export default App;
