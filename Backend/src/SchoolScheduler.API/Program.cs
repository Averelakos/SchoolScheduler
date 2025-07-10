using System.Globalization;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
// app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// Minimal API endpoints
app.MapGet("/api/hello", () =>

    new { Message = "Hello from Minimal API!" }
);
// app.MapGet("/api/hello", () =>
// {
//     Console.WriteLine("Check");
//     return new { Message = "Hello from Minimal API!" };
// });
app.MapGet("/api/ping", () => new { message = "Pong from .NET" });
app.MapPost("/api/echo", (dynamic data) => new { original = data });

// app.MapPost("/api/echo", ([FromBody]dynamic data) =>
// {
//     Console.WriteLine(data.data);
//     return Results.Ok(new {data = data});
// });

// Security: Only allow localhost
app.Urls.Add("http://localhost:5000");
app.Run();
