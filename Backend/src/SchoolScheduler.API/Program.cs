var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/hello", () => new { message = "Hello from C# backend!" });

app.Run("http://localhost:5000");