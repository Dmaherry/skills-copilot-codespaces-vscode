// Create web server
// 
// 2016-01-25    PV
// 2018-01-26    PV      VS2017; Net Core 2.0; Bootstrap 4.0; jQuery 3.3.1
// 2021-09-18    PV      VS2022; Net 6.0

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Comments
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method is used by the runtime.  Use this method to configure the HTTP request pipeline.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        // This method is called after ConfigureServices
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Add middleware to the pipeline
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();       // Serve static files and short circuit
            app.UseRouting();           // Define endpoint routes
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }

        // This method is used by the runtime.  Use this method to add services to the container.
        // This method gets called by the runtime.  Use this method to add services to the container
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        // This method is called before Configure
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
        }

        public IConfiguration Configuration { get; }
    }
}