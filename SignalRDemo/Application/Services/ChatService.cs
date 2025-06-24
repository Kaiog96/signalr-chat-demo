using SignalRDDD.Domain.Entities;
using Microsoft.AspNetCore.SignalR;
using SignalRDDD.Infrastructure.SignalR;

namespace SignalRDDD.Application.Services;

public class ChatService
{
    private readonly IHubContext<ChatHub> _hubContext;

    public ChatService(IHubContext<ChatHub> hubContext)
    {
        _hubContext = hubContext;
    }

    public async Task EnviarMensagem(Mensagem mensagem)
    {
        await _hubContext.Clients.All.SendAsync("ReceberMensagem", mensagem.Usuario, mensagem.Conteudo);
    }
}
