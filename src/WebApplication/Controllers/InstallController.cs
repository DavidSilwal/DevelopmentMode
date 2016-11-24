using Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Controllers
{
    public class InstallController : Controller
    {
        protected readonly UserStore<IdentityUser, IdentityRole> _userStore;
        protected readonly UserManager<IdentityUser> _userManager;
        protected readonly RoleManager<IdentityRole> _roleManager;
        protected readonly ApplicationDbContext _context;

        public InstallController(
            UserStore<IdentityUser, IdentityRole> userStore,
            UserManager<IdentityUser> userManager,
            RoleManager<IdentityRole> roleManager,
            ApplicationDbContext context
            )
        {
            _userStore = userStore;
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
        }

       public async Task<ActionResult> Index()
        {
            var user = new IdentityUser
            {
                Email = $"admin@admin.com",
                UserName = $"admin",
                EmailConfirmed = true
                //Roles = new List<IdentityRole<string>>
                //{
                //    new IdentityRole{
                //          Name = "Admin"
                //    }
                //}
            };


            var result = await _userManager.CreateAsync(user, "DInfoSys123!@#");
            //var result = await _userStore.CreateAsync(user);
          
            //await _userStore.SetPasswordHashAsync(user, "DInfoSys123!@#");

            if(result.Succeeded)
            {
                var adminRole = new IdentityRole()
                {
                    Name = "Admin"
                };

                result = await _roleManager.CreateAsync(adminRole);
    
                await _userStore.AddToRoleAsync(user,adminRole.Name);

                await _roleManager.CreateAsync(new IdentityRole()
                {
                    Name="User"
                });
                await _roleManager.CreateAsync(new IdentityRole()
                {
                    Name = "SuperUser"
                });
            }

            var msg = new List<MessageTemplate>
            {
                  new MessageTemplate
                  {
                       Subject = $"Hello",
                       Body = $"Welcome to this application",
                       MailFrom = $"admin@admin.com"

                  }
            };
            

            _context.MessageTemplateCollection.InsertMany(msg);

            return RedirectToAction("Index","Dashboard");
            
        }

        
    }
}
