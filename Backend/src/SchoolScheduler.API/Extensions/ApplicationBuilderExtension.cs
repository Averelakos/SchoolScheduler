public static class ApplicationBuilderExtension
{
    public static void Configure(this IApplicationBuilder app, IWebHostEnvironment env)
    {
        //if (env.IsDevelopment())
        //{
        //    app.UseSwagger();
        //    app.UseSwaggerUI();
        //}

         //app.UseCors(x => 
         //   x.AllowAnyHeader()
         //   .AllowAnyMethod()
         //   .WithOrigins("http://localhost:5000", "https://localhost:5000"));
        //app.UseHttpsRedirection();
    }
}