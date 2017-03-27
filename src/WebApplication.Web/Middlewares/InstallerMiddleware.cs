using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Identity;

namespace WebApplication.Middlewares
{
    public class InstallerMiddleware
    {
        private readonly RequestDelegate _next;
        protected readonly UserStore<IdentityUser, IdentityRole> _users;



        public InstallerMiddleware(RequestDelegate next,
             ApplicationDbContext context, UserStore<IdentityUser, IdentityRole> users
            )
        {
            _next = next;
            _users = users;
        }

        public Task Invoke(HttpContext context)
        {
            var dbContext = context.RequestServices.GetService(typeof(ApplicationDbContext)) as ApplicationDbContext;

            if (_users.Users.Count() == 0)
            {
                if (!context.Request.Path.ToString().Contains("/Install"))
                {
                    context.Request.Path = "/Install";
                }
            }
            else
            {
                if (context.Request.Path.ToString().Contains("/Install"))
                {
                    context.Request.Path = "/";
                }
            }

            return _next(context);
        }
    }
}
