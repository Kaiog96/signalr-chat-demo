namespace SignalRDDD.Domain.Entities;

public class Mensagem
{
    public string Usuario { get; set; } = "";
    public string Conteudo { get; set; } = "";
    public DateTime EnviadoEm { get; set; } = DateTime.UtcNow;
}