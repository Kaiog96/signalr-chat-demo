using Microsoft.AspNetCore.Mvc;
using SignalRDDD.Application.Services;
using SignalRDDD.Domain.Entities;

namespace SignalRDDD.API.Controllers;

[ApiController]
[Route("Api/[controller]")]
public class ChatController : ControllerBase
{
    private readonly ChatService _chatService;

    public ChatController(ChatService chatService)
    {
        _chatService = chatService;
    }

    [HttpPost("enviar")]
    public async Task<IActionResult> Enviar([FromBody] Mensagem mensagem)
    {
        await _chatService.EnviarMensagem(mensagem);
        return Ok(mensagem);
    }
}
