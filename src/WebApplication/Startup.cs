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
using MongoDB.Bson.Serialization;

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

            services.AddCloudscribePagination();

            BsonClassMap.RegisterClassMap<IdentityUser>(map =>
            {
                map.AutoMap();
                map.SetIgnoreExtraElements(true);
                BsonClassMap.RegisterClassMap<UserLoginInfo>(item =>
                {
                    item.AutoMap();
                    item.SetIgnoreExtraElements(true);
                });
            });
         
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
                   AppId = "1188984081223294",
                   AppSecret = "4bed0b56cb77b0b2f1643384eb8f0266"
               })
                .UseGoogleAuthentication(new GoogleOptions
                {
                    ClientId = "1007746957521-ei30jkh72jq90fec7m3re91dpeaobgl4.apps.googleusercontent.com",
                    ClientSecret = "MEKtgoPZGPYxu9aHqkIeqmqj-"
                })
                .UseTwitterAuthentication(new TwitterOptions
                {                    
                    ConsumerKey = "D8QfWaX5wQIwQaoBHdKSHdYDH",
                    ConsumerSecret = "84kGnFVjpnaGFxvZXmhG47qju3pxnJIY8Kll5zoor00W0u6iqp"
                });


            //app.UseInstaller();
           

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
       
            //app.UseStaticFiles(new StaticFileOptions
            //{
            //    FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "node_modules")),
            //    RequestPath = "/node_modules"
            //});   
                
            app.UseMvc(routes =>
            {
                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "home", action = "index" });
            });

        }
    }
}
