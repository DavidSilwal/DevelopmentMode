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
        protected readonly IMessageRepository _messageRepository;

        public InstallController(
            UserStore<IdentityUser, IdentityRole> userStore,
            UserManager<IdentityUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IMessageRepository messageRepository
            )
        {
            _userStore = userStore;
            _userManager = userManager;
            _roleManager = roleManager;
            _messageRepository = messageRepository;
        }

       public async Task<ActionResult> Index()
        {
            var user = new IdentityUser
            {
                Email = $"admin@admin.com",
                UserName = $"admin",
                EmailConfirmed = true

            };
            

            var result = await _userManager.CreateAsync(user, "Admin123!@#");

            if (result.Succeeded)
            {
                var adminRole = new IdentityRole()
                {
                    Name = "Admin"
                };

                result = await _roleManager.CreateAsync(adminRole);
    
                await _userManager.AddToRoleAsync(user,adminRole.Name);
                
            }

            await _roleManager.CreateAsync(new IdentityRole()
            {
                Name = "Super User"
            });
            await _roleManager.CreateAsync(new IdentityRole()
            {
                Name = "Registered User"
            });
            await _roleManager.CreateAsync(new IdentityRole()
            {
                Name = "Country Manager"
            });
            await _roleManager.CreateAsync(new IdentityRole()
            {
                Name = "Domain Expert"
            });
            await _roleManager.CreateAsync(new IdentityRole()
            {
                Name = "Moderator"
            });


           var msg = new MessageTemplate
            {
                Subject = $"Hello",
                Body = $"Welcome to this application",
                MailFrom = $"admin@admin.com"

            };         
            await _messageRepository.Save(msg);
            
            return RedirectToAction("Index","Dashboard");
            
        }

        
    }
}
