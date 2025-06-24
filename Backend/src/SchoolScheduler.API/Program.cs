var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Minimal API endpoints
app.MapGet("/api/ping", () => new { message = "Pong from .NET" });
app.MapPost("/api/echo", (dynamic data) => new { original = data });

// Security: Only allow localhost
app.Urls.Add("http://localhost:5000"); 
app.Run();