using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Identity;
using WebApplication.Data;
using WebApplication.Services;
using Microsoft.AspNetCore.Identity;
using WebMarkupMin.AspNetCore1;
using WebApplication.Models;
using WebApplication.Middlewares;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.SpaServices.Webpack;

namespace WebApplication
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<IdentityUser, IdentityRole>().AddMongoDBIdentityStores<ApplicationDbContext, IdentityUser, IdentityRole, string>(options =>
            {
                options.ConnectionString = Configuration["Data:DefaultConnection:ConnectionString"];
            })
           .AddDefaultTokenProviders();

            services.AddSingleton <UserStore<IdentityUser, IdentityRole>>();
         
                //services.AddAuthentication(options =>
                //{

                //    options.SignInScheme = new IdentityCookieOptions().ExternalCookieAuthenticationScheme;
                //});


            services.AddAuthorization(options =>
            {
                options.AddPolicy("Admin", policy => policy.RequireClaim("Role", "Admin"));
            });


            // Add framework services.
            services.AddMvc();
            services.AddSingleton<IMessageRepository, MessageRepository>();
            services.AddSingleton<IViewModelService, ViewModelService>();
            services.AddSingleton<IDashboardViewModel, DashboardViewModel>();


            services.AddSingleton<IUserStatusDataRepository,UserStatusDataRepository>();

            services.AddWebMarkupMin(
        options =>
        {
            options.AllowMinificationInDevelopmentEnvironment = true;
            options.AllowCompressionInDevelopmentEnvironment = true;
        })
        .AddHtmlMinification(
            options =>
            {
                options.MinificationSettings.RemoveRedundantAttributes = true;
                options.MinificationSettings.RemoveHttpProtocolFromAttributes = true;
                options.MinificationSettings.RemoveHttpsProtocolFromAttributes = true;
            })
        .AddHttpCompression();
        
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
            services.AddTransient<IViewModelService, ViewModelService>();
         
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();

                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });

            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();


            app.UseCors(builder => {
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });

            app.UseWebMarkupMin();

            
            app.UseCookieAuthentication();
            app.UseIdentity()
               .UseFacebookAuthentication(new FacebookOptions
               {
                   AppId = "901611409868059",
                   AppSecret = "4aa3c530297b1dcebc8860334b39668b"


                   //AppId = "1448839281810879",
                   //AppSecret = "7733ae8f75e2d3d18cf6fec6c791ad5d"
               })
                .UseGoogleAuthentication(new GoogleOptions
                {
                    ClientId = "514485782433-fr3ml6sq0imvhi8a7qir0nb46oumtgn9.apps.googleusercontent.com",
                    ClientSecret = "V2nDD9SkFbvLTqAUBWBBxYAL"

                    //ClientId = "602092482899-l41fviq79kr7hd7lpju2qfp0skkvfdlv.apps.googleusercontent.com",
                    //ClientSecret = "K39xJM_AOOhVTpahCu6rxU6-"
                })
                .UseTwitterAuthentication(new TwitterOptions
                {
                    ConsumerKey = "BSdJJ0CrDuvEhpkchnukXZBUv",
                    ConsumerSecret = "xKUNuKhsRdHD03eLn67xhPAyE1wFFEndFo1X2UJaK2m1jdAxf4"

                    //ConsumerKey = "OMSp7qx2V1Vv71RO6BNfLlb6T",
                    //ConsumerSecret = "pWe7V0znSDUoL86puPOSPE3fq3J9rYsZLOw3evwjHIQfXPqUZy"
                });


            app.UseInstaller();
           

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "node_modules")),
                RequestPath = "/node_modules"
            });

            app.UseMvc(routes =>
            {
                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "home", action = "index" });
            });

        }
    }
}
